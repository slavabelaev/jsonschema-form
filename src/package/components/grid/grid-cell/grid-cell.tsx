import React from 'react';
import {createCn} from "bem-react-classname";
import useMedia from "arui-feather/mq/useMedia";
import './grid-cell.scss';

const cn = createCn('grid-cell');

export type GridCellMediaProp = {
    xs?: string;
    s?: string;
    m?: string;
    l?: string;
    xl?: string;
}

export type Size = keyof GridCellMediaProp;

export type GridCellProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    column?: GridCellMediaProp | string;
    row?: GridCellMediaProp | string;
};

function getValue(property?: GridCellMediaProp | string, size?: Size) {
    switch (typeof property) {
        case "number":
        case "string": return property;
        case "object": return property?.[size as keyof GridCellMediaProp]
    }
}

export function GridCell({ className, style, column, row, ...props }: GridCellProps) {
    const classNames = [cn(), className].join(' ');
    const sizeMatches = {
        xs: useMedia('(min-width: 0) and (max-width: 599px)'),
        s: useMedia('(min-width: 600px) and (max-width: 1023px)'),
        m: useMedia('(min-width: 1024px) and (max-width: 1439px)'),
        l: useMedia('(min-width: 1440px) and (max-width: 1919px)'),
        xl: useMedia('(min-width: 1920px)')
    }
    const size = Object.entries(sizeMatches)?.find(([size, hasMatch]) => hasMatch)?.[0] as Size;
    const gridColumn = getValue(column, size);
    const gridRow = getValue(row, size);

    return (
        <div
            className={classNames}
            style={{
                gridColumn,
                gridRow,
                ...style
            }}
            {...props}
        />
    );
}
