import * as React from 'react';
import { connectForm } from "form-container";
import { request } from "../../utils/request";
import { required } from "../../utils/validators";
import {
    TextField,
    CardContent,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
    Button,
} from "@material-ui/core";

import ResultsUsers from '../../components/ResultsUsers/ResultsUsers';
import ResultsRepo from '../../components/ResultsRepo/ResultsRepo';
// import RadioField from "../../components/RadioField/RadioField";

const constructAPIUrl = (query, category) => {
    const api_url = `https://api.github.com/search/${category}?q=${query}&per_page=100&sort=stars&order=desc`;
    return api_url;
};

const apiOptions = {
    auth: {
        username: process.env.REACT_APP_GITHUB_USERNAME,
        password: process.env.REACT_APP_GITHUB_PASSWORD,
    }
};


class GeneralSearchPage extends React.Component {
    state = {
        resultsAvailable: false,
    };

    configureResults = (category) => {

        const {
            results,
        } = this.state;

        switch (category) {
            case 'users':
                return (<ResultsUsers items={results} />);
            case 'repositories':
                return (<ResultsRepo items={results} />);
            default:
                return null
        }
    }

    handleSearchClick = (query, category) => {
        request(constructAPIUrl(query, category), apiOptions)
            .then(response => {
                this.setState({
                    resultsAvailable: true,
                    results: response.data.items,
                    requestsLeft: response.headers['x-ratelimit-remaining'],
                    requestReset: response.headers['x-ratelimit-reset'],
                })
            })
            .catch(error => {
                console.error(error);
            });
    }

    dirtyInputError = prop =>
        this.props.form.touched[prop] && this.props.form.validationErrors[prop];

    render() {
        const {
            formMethods: { bindInput },
            form: {
                isValid,
                model,
            }
        } = this.props;

        const {
            resultsAvailable,
            results,
            requestsLeft,
            requestReset,
        } = this.state;

        return (
            <div>
                <form name="login" onSubmit={this.handleSubmit}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    style={{ marginBottom: "20px" }}
                                    fullWidth
                                    label="Enter your search term"
                                    error={!!this.dirtyInputError("searchTerm")}
                                    helperText={this.dirtyInputError("searchTerm")}
                                    {...bindInput("searchTerm")}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    variant="contained"
                                    disabled={!isValid}
                                    onClick={() => this.handleSearchClick(
                                        model.searchTerm,
                                        model.searchCategory
                                    )}>
                                    Search
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <RadioGroup aria-label="Gender" {...bindInput("searchCategory")}>
                                    {/* <RadioField options={["x", "y"]} selected={model.searchCategory} /> */}
                                    <FormControlLabel
                                        value="repositories"
                                        control={<Radio />}
                                        label="Repositories (search the repositories with a name)"
                                    />
                                    <FormControlLabel
                                        value="users"
                                        control={<Radio />}
                                        label="Users (search for a user)"
                                    />
                                </RadioGroup>
                            </Grid>
                            {resultsAvailable && (
                                <React.Fragment>
                                    <Grid item xs={12}>
                                        <h2>Results: {results.length}</h2>
                                        <h5>Dev Info</h5>
                                        <h6>RequestsLeft: {requestsLeft}</h6>
                                        <h6>Request Quota Reset: {(new Date(requestReset * 1000)).toString()}</h6>

                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.configureResults(model.searchCategory)}
                                    </Grid>
                                </React.Fragment>
                            )}
                        </Grid>
                    </CardContent>
                </form>
            </div>
        )
    }
}

const validators = [
    required("searchTerm"),
    required("searchCategory")
];

export default connectForm(validators)(GeneralSearchPage);
