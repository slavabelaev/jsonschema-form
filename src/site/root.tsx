import React from 'react';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import {ThemeSwitchProvider} from "./app/theme-switch";
import App from "./app";

export type Params = {
    group: string;
    name: string;
    subName: string;
}

function Root() {
    return (
        <ThemeSwitchProvider>
            <HashRouter>
                <Switch>
                    <Route path='/:group/:widget' component={App} />
                    <Redirect to='/ui-schema/widget/attach' />
                </Switch>
            </HashRouter>
        </ThemeSwitchProvider>
    )
}

export default Root;
