import React, {PropsWithChildren, useContext, useState} from 'react';
import {FormProps} from "arui-feather/form";

type CodeTheme = FormProps['theme'];

type CodeThemeContextValue = {
    theme: CodeTheme;
    setTheme: (theme: CodeTheme) => void;
    toggleTheme: () => void;
}

const CodeThemeContext = React.createContext<CodeThemeContextValue>({
    theme: 'alfa-on-white',
    setTheme: () => null,
    toggleTheme: () => null
});

const { Provider } = CodeThemeContext;

export const useCodeTheme = () => useContext(CodeThemeContext);

export type CodeThemeProviderProps = PropsWithChildren<{}>;

export function CodeThemeProvider({ children }: CodeThemeProviderProps) {
    const storageKey = 'code-theme';
    const codeTheme = localStorage.getItem(storageKey) as CodeTheme
        || 'alfa-on-white';
    const [theme, _setTheme] = useState<FormProps['theme']>(codeTheme);
    const storeTheme = (theme: CodeTheme) => {
        if (theme) localStorage.setItem(storageKey, theme);
    };

    const setTheme = (theme: CodeTheme) => {
        _setTheme(theme);
        storeTheme(theme);
    }

    const toggleTheme = () => {
        const newTheme = theme === 'alfa-on-white'
            ? 'alfa-on-color'
            : 'alfa-on-white';
        setTheme(newTheme);
    }

    return (
        <Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </Provider>
    )
}
