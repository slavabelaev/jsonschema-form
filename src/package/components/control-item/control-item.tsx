import React, {PropsWithChildren} from 'react';
import {createCn} from "bem-react-classname";
import {FormProps} from "arui-feather/form";
import Delete from "arui-feather/icon/action/delete";
import {Tooltip} from "../tooltip";
import {Reorder, ReorderProps} from "../reorder";
import './control-item.scss';

const cn = createCn('control-item');

export type ControlItemProps = PropsWithChildren<{
    className?: string;
    theme?: FormProps['theme'];
    size?: FormProps['size'];
    onRemove?: () => void;
    reorderProps?: ReorderProps;
}>

export function ControlItem(props: ControlItemProps) {
    const { className, theme = 'alfa-on-white', size, children, onRemove, reorderProps } = props;
    const rootClassName = [cn(), className].join(' ');

    const removeButton = onRemove && (
        <Tooltip
            className={cn('remove-tooltip')}
            popupContent={'Удалить'}
            popupProps={{
                directions: ['left-center']
            }}
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
            type={'vertical'}
            theme={theme}
            size={'s'}
        />
    );

    const content = (
        <div className={cn('content')}>
            {children}
        </div>
    )

    return (
        <div className={rootClassName}>
            {reorder}
            {content}
            {removeButton}
        </div>
    )
}
