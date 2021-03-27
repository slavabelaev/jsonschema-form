import React, {PropsWithChildren, ReactNode} from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import Delete from "arui-feather/icon/action/delete";
import {Reorder, ReorderProps} from "../reorder";
import {Tooltip} from "../tooltip";
import './card.scss';

const cn = createCn('card');

export type CardProps = PropsWithChildren<{
    icon?: ReactNode;
    title?: ReactNode;
    hint?: ReactNode;
    className?: string;
    theme?: FormProps['theme'];
    size?: FormProps['size'];
    onRemove?: () => void;
    reorderProps?: ReorderProps;
}>

export function Card(props: CardProps) {
    const { className, icon, title, hint, children, theme = 'alfa-on-white', size, onRemove, reorderProps } = props;
    const classNames = [cn({ theme }), className].join(' ');

    const removeButton = onRemove && (
        <Tooltip
            className={cn('remove-button')}
            popupContent={'Удалить'}
            popupProps={{
                directions: ['left-center']
            }}
            theme={theme}
            size={size}
            onClick={onRemove}
        >
            <Delete
                theme={theme}
                size={size}
            />
        </Tooltip>
    );

    const reorder = reorderProps && (
        <Reorder
            className={cn('reorder')}
            {...reorderProps}
            type={'horizontal'}
            theme={theme}
            size={size}
        />
    );

    const hintTooltip = hint && (
        <Tooltip
            className={cn('hint')}
            popupContent={hint}
        />
    )

    const heading = title && (
        <legend className={cn('heading')}>
            {title}
        </legend>
    );

    const actions = (reorder || removeButton) && (
        <div className={cn('actions')}>
            {reorder}
            {removeButton}
        </div>
    )

    const header = (icon || heading || hintTooltip || actions) && (
        <header className={cn('header', { theme })}>
            {icon}
            {heading}
            {hintTooltip}
            {actions}
        </header>
    )

    const body = (
        <div className={cn('body', { theme })}>
            {children}
        </div>
    )

    return (
        <div className={classNames}>
            {header}
            {body}
        </div>
    )
}
