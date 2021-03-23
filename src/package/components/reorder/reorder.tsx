import React from "react";
import {createCn} from 'bem-react-classname';
import ArrowDownIcon from "arui-feather/icon/ui/arrow-down";
import ArrowUpIcon from "arui-feather/icon/ui/arrow-up";
import {Button, ButtonProps} from "arui-feather/button";
import {FormProps} from "arui-feather/form";
import {Tooltip} from "../tooltip";
import './reorder.scss';

export type ReorderProps = {
    className?: HTMLDivElement['className'];
    onClickDown?: (event: any) => void;
    onClickUp?: (event: any) => void;
    disabledUp?: boolean;
    disabledDown?: boolean;
    buttonProps?: ButtonProps;
    type?: 'vertical' | 'horizontal';
    theme?: FormProps['theme'];
    size?: FormProps['size'];
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
    type = 'vertical'
}: ReorderProps) {
    const classNames = [cn({ type }), className].join(' ');
    const isVertical = type === 'vertical';

    const upButton = (
        <Tooltip
            className={cn('tooltip')}
            popupContent={'Переместить вверх'}
            popupProps={{
                directions: isVertical ? ['top-left'] : ['left-center'],
            }}
            switcherType={'button'}
            disabled={disabledUp}
            theme={theme}
            size={size}
        >
            <Button
                className={cn('button')}
                theme={theme}
                size={size}
                {...buttonProps}
                disabled={disabledUp}
                onClick={onClickUp}
            >
                <ArrowUpIcon
                    size={size}
                    theme={theme}
                />
            </Button>
        </Tooltip>
    )

    const downButton = (
        <Tooltip
            className={cn('tooltip')}
            popupContent={'Переместить вниз'}
            popupProps={{
                directions: isVertical ? ['bottom-left'] : ['left-center'],
            }}
            switcherType={'button'}
            disabled={disabledDown}
            theme={theme}
            size={size}
        >
            <Button
                className={cn('button')}
                theme={theme}
                size={size}
                {...buttonProps}
                disabled={disabledDown}
                onClick={onClickDown}
            >
                <ArrowDownIcon
                    size={size}
                    theme={theme}
                />
            </Button>
        </Tooltip>
    )

    return (
        <div className={classNames}>
            {upButton}
            {downButton}
        </div>
    )
}
