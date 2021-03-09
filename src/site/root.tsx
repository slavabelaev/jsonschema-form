import React from 'react';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import App from "./app";

export type Params = {
    group: string;
    name: string;
    subName: string;
}

function Root() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/:group/:widget' component={App} />
                <Redirect to='/ui-schema/widget/attach' />
            </Switch>
        </HashRouter>
    )
}

export default Root;
