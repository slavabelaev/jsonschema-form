import React, {PropsWithChildren, useState} from 'react';
import {ThemeProviderProps} from "arui-feather/theme-provider";

export type ThemeSwitchProviderValue = {
    theme?: ThemeProviderProps['theme'];
    setTheme?: (theme: ThemeProviderProps['theme']) => void;
}

export const ThemeSwitchContext = React.createContext<ThemeSwitchProviderValue>({});

const { Provider } = ThemeSwitchContext;

export type ThemeSwitchProviderProps = PropsWithChildren<{}>;

export function ThemeSwitchProvider(props: ThemeSwitchProviderProps) {
    const [theme, setTheme] = useState<ThemeProviderProps['theme']>('alfa-on-white');

    return (
        <Provider value={{ theme, setTheme }}>
            {props.children}
        </Provider>
    )
}
