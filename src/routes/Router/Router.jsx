import * as React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import GeneralSearchPage from '../../pages/GeneralSearchPage/GeneralSearchPage';
import HomePage from '../../pages/HomePage/HomePage';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/general" component={GeneralSearchPage} />
    </Switch>
);

export default withRouter(Router);