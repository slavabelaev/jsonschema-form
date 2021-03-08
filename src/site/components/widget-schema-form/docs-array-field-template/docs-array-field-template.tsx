import React from "react";
import {createCn} from "bem-react-classname";
import {ArrayFieldTemplateProps} from "@rjsf/core";
import CloseIcon from 'arui-feather/icon/ui/close';
import {DocsReorder} from "../docs-reorder";
import './docs-array-field-template.scss';

const cn = createCn('docs-array-field-template');

export function DocsArrayFieldTemplate(props: ArrayFieldTemplateProps) {
    const {
        className,
        canAdd,
        onAddClick,
        items
    } = props;
    const hasItems = items.length > 0;

    const addButton = canAdd && (
        <button
            className={cn('item-add-button')}
            onClick={onAddClick}
        >
            + Добавить
        </button>
    );

    const group = hasItems ? (
        <ul className={cn('item-group')}>
            {items.map(item => {
                const { index } = item;
                if (!item.children) return null;

                const removeButton = item.hasRemove && (
                    <button
                        className={cn('item-remove-button')}
                        onClick={item.onDropIndexClick(index)}
                    >
                        <CloseIcon size='s' />
                    </button>
                );

                const reorder = (item.hasMoveDown || item.hasMoveUp) && (
                    <DocsReorder
                        className={cn('item-reorder')}
                        onClickUp={item.onReorderClick(index, index - 1)}
                        onClickDown={item.onReorderClick(index, index + 1)}
                        disabledUp={!item.hasMoveUp}
                        disabledDown={!item.hasMoveDown}
                    />
                );

                const group = (
                    <div className={cn('item-group')}>
                        {item.children}
                    </div>
                );

                return (
                    <li
                        key={item.key}
                        className={[cn('item'), item.className].join(' ')}
                    >
                        {reorder}
                        {group}
                        {removeButton}
                    </li>
                )
            })}
        </ul>
    ) : null;

    const classNames = [cn(), className].join(' ');
    return hasItems || canAdd ? (
        <fieldset className={classNames}>
            {group}
            {addButton}
        </fieldset>
    ) : null;
}
