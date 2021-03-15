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
    const [theme, setTheme] = useState<ThemeProviderProps['theme']>('alfa-on-white');

    return (
        <Provider value={{ theme, setTheme }}>
            {props.children}
        </Provider>
    )
}
