import React from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import './progress.scss';

const cn = createCn('progress');

export type ProgressProps = {
    className?: string;
    percent?: number;
    maxPercent?: number;
    theme?: FormProps['theme'];
    size?: FormProps['size'];
}

export function Progress({
     percent,
     maxPercent,
     className,
     theme = 'alfa-on-white',
     size = 'm'
}: ProgressProps) {
    const classNames = [
        cn({ theme, size }),
        className
    ].join(' ');

    return (
        <div className={classNames}>
            <div
                className={cn('max-percent', { theme, size })}
                style={{ width: `${maxPercent}%` }}
            />
            <div
                className={cn('percent', { theme, size })}
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}
