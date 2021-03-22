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
    view?: 'vertical' | 'horizontal';
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
    size = 'm',
    view = 'vertical'
}: ReorderProps) {
    const classNames = [cn({ view }), className].join(' ');

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
                    size={size}
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
                    size={size}
                    theme={theme}
                />
            </Button>
        </div>
    )
}
