import React, {PropsWithChildren, useContext, useState} from 'react';
import {ThemeProviderProps} from "arui-feather/theme-provider";

export type ThemeToggleProviderValue = {
    theme: ThemeProviderProps['theme'];
    setTheme: (theme: ThemeProviderProps['theme']) => void;
}

export type ThemeToggleProviderProps = PropsWithChildren<{}>;

const ThemeToggleContext = React.createContext<ThemeToggleProviderValue>({
    theme: 'alfa-on-white',
    setTheme: () => null,
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

const { Provider } = ThemeToggleContext;

const storageKey = 'theme';

export function ThemeToggleProvider(props: ThemeToggleProviderProps) {
    const storedTheme = localStorage.getItem(storageKey) as ThemeProviderProps['theme']
        || 'alfa-on-white';
    const [theme, _setTheme] = useState<ThemeProviderProps['theme']>(storedTheme);
    const setTheme = (theme: ThemeProviderProps['theme']) => {
        _setTheme(theme);
        if (theme) localStorage.setItem(storageKey, theme);
    };

    return (
        <Provider value={{ theme, setTheme }}>
            {props.children}
        </Provider>
    )
}
