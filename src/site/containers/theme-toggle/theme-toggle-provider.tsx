import React, {PropsWithChildren, useState} from 'react';
import {ThemeProviderProps} from "arui-feather/theme-provider";

export type ThemeToggleProviderValue = {
    theme?: ThemeProviderProps['theme'];
    setTheme?: (theme: ThemeProviderProps['theme']) => void;
}

export const ThemeToggleContext = React.createContext<ThemeToggleProviderValue>({});

const { Provider } = ThemeToggleContext;

export type ThemeToggleProviderProps = PropsWithChildren<{}>;

export function ThemeToggleProvider(props: ThemeToggleProviderProps) {
    const [theme, _setTheme] = useState<ThemeProviderProps['theme']>('alfa-on-white');
    const setTheme = (theme) => ['alfa-on-white', 'alfa-on-color'].includes(theme) && _setTheme(theme);

    return (
        <Provider value={{ theme, setTheme }}>
            {props.children}
        </Provider>
    )
}
