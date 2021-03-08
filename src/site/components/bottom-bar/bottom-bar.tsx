import React, {ReactNode} from 'react';
import {createCn} from "bem-react-classname";
import './bottom-bar.scss';

const cn = createCn('bottom-bar');

export type BottomBarItemProps = {
    text: string;
    icon: ReactNode;
};

export type BottomBarProps = {
    className?: string;
    items: BottomBarItemProps[];
    onChange?: (id: number) => void;
}

export function BottomBar(props: BottomBarProps) {
    const className = [cn(), props.className].join(' ');

    const renderItem = (item: BottomBarItemProps, index: number) => {
        return (
            <div
                key={index}
                className={cn('item')}
                onClick={() => props?.onChange?.(index)}
            >
                {item.icon}
                <span className={cn('text')}>
                    {item.text}
                </span>
            </div>
        )
    }

    return (
        <div className={className}>
            {props.items?.map(renderItem)}
        </div>
    )
}
