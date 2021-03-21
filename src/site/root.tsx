import React from 'react';
import {ThemeToggleProvider} from "./containers/theme-toggle";
import {Router} from "./router";

function Root() {
    return (
        <ThemeToggleProvider>
            <Router />
        </ThemeToggleProvider>
    )
}

export default Root;
