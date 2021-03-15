import React, {useContext} from 'react';
import {createCn} from "bem-react-classname";
import {Toggle} from "arui-feather/toggle";
import {ThemeSwitchContext} from "./theme-switch-provider";
import './theme-switch.scss';

const cn = createCn('theme-switch');

export type ThemeSwitchProps = {
    className?: string;
};

export function ThemeSwitch(props: ThemeSwitchProps) {
    const { className } = props;
    const { theme = 'alfa-on-white', setTheme } = useContext(ThemeSwitchContext);
    const rootClassName = [cn({ theme }), className].join(' ');
    const checked = theme === 'alfa-on-color';
    const toggleTheme = () => setTheme?.(checked ? 'alfa-on-white' : 'alfa-on-color');

    return (
        <Toggle
            className={rootClassName}
            checked={checked}
            onChange={toggleTheme}
        />
    )
}
