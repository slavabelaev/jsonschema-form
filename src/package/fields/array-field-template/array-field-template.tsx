import React from "react";
import {createCn} from "bem-react-classname";
import isEmpty from "lodash.isempty";
import {ArrayFieldTemplateProps} from "@rjsf/core";
import {Button} from "arui-feather/button";
import Delete from "arui-feather/icon/action/delete";
import {Paragraph} from "arui-feather/paragraph";
import Add from "arui-feather/icon/action/add";
import {Reorder} from "../../components/reorder";
import {
    TemplateConfig,
    TemplateConfigProvider
} from "../../providers/template-config-provider";
import {Grid, GridCell} from "../../components/grid";
import {toType} from "../../utils/to-type";
import {Tooltip} from "../../components/tooltip";
import {isGroup} from "../../utils/json-schema";
import './array-field-template.scss';

const cn = createCn('array-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: true,
    displayHint: true
}

export function mapArrayFieldButtons(props: ArrayFieldTemplateProps) {
    const { canAdd, onAddClick, formContext } = props;
    const { theme, size } = formContext || {};

    const addButton = canAdd ? (
        <Button
            className={cn('add-button')}
            onClick={onAddClick}
            icon={<Add theme={theme} size={size} />}
            theme={theme}
            size={size}
        >
            Добавить
        </Button>
    ) : null;

    return addButton ? (
        <div className={cn('buttons')}>
            {addButton}
        </div>
    ) : null;
}

function mapItems(props: ArrayFieldTemplateProps) {
    const { items, formContext } = props || {};
    const { theme, size, width } = formContext || {};
    const hasItems = items.length > 0;

    return hasItems ? (
        <Grid className={cn('items')}>
            {items.map(item => {
                const { index, children } = item;
                const { uiSchema, schema, formData } = children?.props || {};
                const isEmptySchema = isEmpty(schema);
                const isGroupSchema = isGroup(schema);
                const className = [
                    cn('item', {
                        'is-group': isGroupSchema
                    }),
                    item.className
                ].join(' ');

                const removeButton = item.hasRemove && (
                    <Tooltip
                        className={cn('remove-tooltip')}
                        popupContent={'Удалить'}
                        popupProps={{
                            directions: ['left-center']
                        }}
                    >
                        <span
                            role='button'
                            className={cn('remove-button')}
                            onClick={item.onDropIndexClick(index)}
                        >
                            <Delete theme={theme} size={size} />
                        </span>
                    </Tooltip>
                );

                const reorder = (item.hasMoveDown || item.hasMoveUp) && (
                    <Reorder
                        className={cn('item-reorder')}
                        onClickUp={item.onReorderClick(index, index - 1)}
                        onClickDown={item.onReorderClick(index, index + 1)}
                        disabledUp={!item.hasMoveUp}
                        disabledDown={!item.hasMoveDown}
                        buttonProps={{
                            width,
                            theme
                        }}
                        view={isGroupSchema ? 'horizontal' : 'vertical'}
                        theme={theme}
                        size={'s'}
                    />
                );

                const emptyContent = isEmptySchema && (
                    <Paragraph
                        className={cn('empty-children')}
                        children={toType(formData, 'string')}
                        theme={theme}
                    />
                )

                const itemChildren = (
                    <div className={cn('item-children', { 'is-empty': isEmptySchema })}>
                        {emptyContent || children}
                    </div>
                );

                const toolbar = isGroupSchema ? (
                    <aside className={cn('toolbar')}>
                        {reorder}
                        {removeButton}
                    </aside>
                ) : removeButton;

                return (
                    <GridCell
                        key={item.key}
                        className={className}
                        column={uiSchema?.['ui:gridColumn']}
                        row={uiSchema?.['ui:gridRow']}
                    >
                        {isGroupSchema ? null : reorder}
                        {itemChildren}
                        {toolbar}
                    </GridCell>
                )
            })}
        </Grid>
    ) : null;
}

export function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
    const { theme = 'alfa-on-white' } = props.formContext || {};
    const { className } = props;
    const classNames = [cn({ theme }), className].join(' ');
    const items = mapItems(props);
    const buttons = mapArrayFieldButtons(props);

    return items || buttons ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={classNames}>
                {items}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
