import React from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import {ThemeIcon} from "./theme-icon";
import {Tooltip} from "../../../../tooltip";
import {useCodeTheme} from "./code-theme-provider";
import './code-theme-toggle.scss';

const cn = createCn('code-theme-toggle');

const getModeName = (theme: FormProps['theme']) => {
    switch (theme) {
        case 'alfa-on-color': return 'светлый';
        case 'alfa-on-white':
        default: return 'темный';
    }
}

export function CodeThemeToggle() {
    const { theme, toggleTheme } = useCodeTheme();
    const modeName = getModeName(theme);

    return (
        <Tooltip
            popupContent={`Переключить в ${modeName} режим`}
            popupProps={{
                directions: ['left-center']
            }}
            className={cn()}
            theme={theme}
            size={'s'}
            switcherType='button'
            onClick={toggleTheme}
        >
            <ThemeIcon
                theme={theme}
            />
        </Tooltip>
    )
}
