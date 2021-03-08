import React from 'react';
import {createCn} from "bem-react-classname";
import './progress.scss';

const cn = createCn('progress');

export type ProgressProps = {
    className?: string;
    percent?: number;
    maxPercent?: number;
}

export function Progress(props: ProgressProps) {
    const { percent, maxPercent } = props;
    const className = [cn(), props.className].join(' ');
    return (
        <div className={className}>
            <div
                className={cn('max-percent')}
                style={{ width: `${maxPercent}%` }}
            />
            <div
                className={cn('percent')}
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}
