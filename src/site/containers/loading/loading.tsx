import React from 'react';
import {Spin} from "arui-feather/spin";
import {createCn} from "bem-react-classname";
import {useThemeToggle} from "../theme-toggle";
import './loading.scss';

const cn = createCn('loading');

export function Loading() {
    const { theme = 'alfa-on-white' } = useThemeToggle();

    return (
        <div className={cn()}>
            <Spin
                visible={true}
                theme={theme}
                size={'l'}
            />
        </div>
    )
}
