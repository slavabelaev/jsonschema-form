import React from 'react';
import {Route, Router, Redirect, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from "./app";

export type Params = {
    group: string;
    name: string;
    subName: string;
}

const history = createBrowserHistory();

function Root() {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/:group/:widget' component={App} />
                <Redirect to='/ui-schema/widget/attach' />
            </Switch>
        </Router>
    )
}

export default Root;
