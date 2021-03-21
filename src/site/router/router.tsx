import React, {ReactNode} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {RouteProvider} from "./route-provider";
import App from "../app";

export function Router() {
    const getRender = (children: ReactNode) => () => (
        <RouteProvider>
            {children}
        </RouteProvider>
    )

    return (
        <HashRouter>
            <Switch>
                <Route path='/:group/:widget' render={getRender(<App />)} />
                <Redirect to='/ui-schema/widget/attach' />
            </Switch>
        </HashRouter>
    )
}
