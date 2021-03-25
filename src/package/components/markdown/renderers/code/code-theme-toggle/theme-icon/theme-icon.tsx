import React from 'react';
import {createCn} from "bem-react-classname";
import {IconProps} from "arui-feather/icon";
import themeIconURL from './theme-icon.svg';
import themeIconOnColor from './theme-icon_alfa-on-color.svg';
import './theme-icon.scss';

const cn = createCn('theme-icon');

export function ThemeIcon(props: IconProps) {
    const { theme = 'alfa-on-white', size = 'm' } = props;
    const sourceURL = theme === 'alfa-on-color'
        ? themeIconOnColor
        : themeIconURL

    return (
        <img
            className={cn({ theme, size })}
            src={sourceURL}
            alt="theme"
        />
    )
}
