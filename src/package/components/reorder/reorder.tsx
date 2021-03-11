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
    theme?: ButtonProps['theme'];
    size?: ButtonProps['size'];
}

const cn = createCn('reorder');

export function Reorder({
    className,
    disabledDown = false,
    disabledUp = false,
    onClickUp,
    onClickDown,
    buttonProps,
    theme,
    size
}: ReorderProps) {
    const classNames = [cn(), className].join(' ');

    return (
        <div className={classNames}>
            <Button
                type="button"
                className={cn('button')}
                disabled={disabledUp}
                onClick={onClickUp}
                theme={theme}
                size={size}
                {...buttonProps}
            >
                <ArrowUpIcon
                    size="s"
                    theme={theme}
                />
            </Button>
            <Button
                type="button"
                className={cn('button')}
                disabled={disabledDown}
                onClick={onClickDown}
                theme={theme}
                size={size}
                {...buttonProps}
            >
                <ArrowDownIcon
                    size="s"
                    theme={theme}
                />
            </Button>
        </div>
    )
}
