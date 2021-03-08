import React from "react";
import {createCn} from 'bem-react-classname';
import ArrowDownIcon from "arui-feather/icon/ui/arrow-down";
import ArrowUpIcon from "arui-feather/icon/ui/arrow-up";
import {Button, ButtonProps} from "arui-feather/button";
import './reorder.scss';

export type ReorderProps = {
    className?: HTMLDivElement['className'];
    onClickDown?: (event: any) => void;
    onClickUp?: (event: any) => void;
    disabledUp?: boolean;
    disabledDown?: boolean;
    buttonProps?: ButtonProps;
}

const cn = createCn('reorder');

export function Reorder({
    className,
    disabledDown = false,
    disabledUp = false,
    onClickUp,
    onClickDown,
    buttonProps
}: ReorderProps) {
    const classNames = [cn(), className].join(' ');

    return (
        <div className={classNames}>
            <Button
                type="button"
                className={cn('button')}
                disabled={disabledUp}
                onClick={onClickUp}
                {...buttonProps}
            >
                <ArrowUpIcon size="s" />
            </Button>
            <Button
                type="button"
                className={cn('button')}
                disabled={disabledDown}
                onClick={onClickDown}
                {...buttonProps}
            >
                <ArrowDownIcon size="s" />
            </Button>
        </div>
    )
}
