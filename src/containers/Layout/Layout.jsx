import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header/Header';
import { withRouter } from 'react-router-dom';

const Layout = (props) => {
    const { history } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <header>
                <Header history={history}/>
            </header>
        </React.Fragment>
    )
};

export default withRouter(Layout);