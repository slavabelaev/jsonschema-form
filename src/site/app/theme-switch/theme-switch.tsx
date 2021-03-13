import React, {useContext} from 'react';
import {createCn} from "bem-react-classname";
import OnIcon from './on.svg';
import OffIcon from './off.svg';
import {ThemeSwitchContext} from "./theme-switch-provider";
import './theme-switch.scss';

const cn = createCn('theme-switch');

export type ThemeSwitchProps = {
    className?: string;
};

export function ThemeSwitch(props: ThemeSwitchProps) {
    const { className } = props;
    const rootClassName = [cn(), className].join(' ');
    const { theme, setTheme } = useContext(ThemeSwitchContext);
    const source = theme === 'alfa-on-white' ? OnIcon : OffIcon;
    const toggleTheme = () => setTheme?.(theme === 'alfa-on-white' ? 'alfa-on-color' : 'alfa-on-white');

    return (
        <img
            className={rootClassName}
            src={source}
            alt={''}
            onClick={toggleTheme}
        />
    )
}
