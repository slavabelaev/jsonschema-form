import React from "react";
import {createCn} from "bem-react-classname";
import './grid.scss';

const cn = createCn('grid');

export type GridProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function Grid({ className, ...props }: GridProps) {
    const classNames = [cn(), className].join(' ');
    return (
        <div
            className={classNames}
            {...props}
        />
    );
}
