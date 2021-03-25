import React from 'react';
import {createCn} from "bem-react-classname";
import {Toggle} from "arui-feather/toggle";
import {useThemeToggle} from "./theme-toggle-provider";
import './theme-toggle.scss';

const cn = createCn('theme-toggle');

export type ThemeToggleProps = {
    className?: string;
};

export function ThemeToggle(props: ThemeToggleProps) {
    const { className } = props;
    const { theme = 'alfa-on-white', setTheme } = useThemeToggle();
    const classNames = [cn({ theme }), className].join(' ');
    const checked = theme === 'alfa-on-color';
    const toggleTheme = () => setTheme?.(checked ? 'alfa-on-white' : 'alfa-on-color');

    return (
        <Toggle
            className={classNames}
            checked={checked}
            onChange={toggleTheme}
        />
    )
}
