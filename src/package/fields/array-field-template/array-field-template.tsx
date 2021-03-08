import React, {useContext} from "react";
import {createCn} from "bem-react-classname";
import isEmpty from "lodash.isempty";
import {ArrayFieldTemplateProps} from "@rjsf/core";
import {Button} from "arui-feather/button";
import {IconButton} from "arui-feather/icon-button";
import Delete from "arui-feather/icon/action/delete";
import Add from "arui-feather/icon/action/add";
import {Reorder} from "../../components/reorder";
import {ErrorList} from "../../components/error-list";
import {fromMarkdown} from "../../utils/from-markdown";
import {
    TemplateConfig,
    TemplateConfigContext,
    TemplateConfigProvider
} from "../object-field-template/template-config-provider";
import {Grid, GridCell} from "../../components/grid";
import './array-field-template.scss';
import {toType} from "../../utils/to-type";
import {Paragraph} from "arui-feather/paragraph";

const cn = createCn('array-field-template');

export const templateConfig: TemplateConfig = {
    displayHeader: true
}

export function mapArrayFieldButtons(props: ArrayFieldTemplateProps) {
    const { canAdd, onAddClick, formContext } = props;
    const { theme, size } = formContext || {};

    const addButton = canAdd ? (
        <Button
            className={cn('add-button')}
            onClick={onAddClick}
            icon={<Add />}
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

export function mapArrayFieldHeader(props: ArrayFieldTemplateProps) {
    const {
        TitleField,
        DescriptionField,
        schema,
        required
    } = props;
    const { description } = schema;
    const title = schema.title || props.title;

    const titleField = TitleField && title && (
        <TitleField
            id={''}
            title={title}
            required={required}
        />
    );

    const descriptionField = DescriptionField && description && (
        <DescriptionField
            id={''}
            description={description}
        />
    );

    return (titleField || descriptionField) ? (
        <div className={cn('header')}>
            {titleField}
            {descriptionField}
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
                const className = [
                    cn('item'),
                    item.className
                ].join(' ');

                const removeButton = item.hasRemove && (
                    <IconButton
                        className={cn('remove-button')}
                        onClick={item.onDropIndexClick(index)}
                        icon={<Delete size={size} />}
                        theme={theme}
                        size={size}
                    />
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
                    />
                );

                const emptyContent = isEmptySchema && (
                    <Paragraph
                        className={cn('empty-children')}
                        children={toType(formData, 'string')}
                    />
                )

                const itemChildren = (
                    <div className={cn('item-children', { 'is-empty': isEmptySchema })}>
                        {emptyContent || children}
                    </div>
                );

                return (
                    <GridCell
                        key={item.key}
                        className={className}
                        column={uiSchema?.['ui:gridColumn']}
                        row={uiSchema?.['ui:gridRow']}
                    >
                        {reorder}
                        {itemChildren}
                        {removeButton}
                    </GridCell>
                )
            })}
        </Grid>
    ) : null;
}

function mapErrors(props: ArrayFieldTemplateProps) {
    // @ts-ignore
    const { rawErrors = [] } = props || {};
    const hasErrors = rawErrors.length > 0;

    return hasErrors ? (
        <ErrorList errors={rawErrors?.map(fromMarkdown)} />
    ) : null;
}

export function ArrayFieldTemplate(props: ArrayFieldTemplateProps) {
    const { displayHeader } = useContext(TemplateConfigContext);
    const { className } = props;
    const classNames = [cn(), className].join(' ');
    const header = displayHeader && mapArrayFieldHeader(props);
    const items = mapItems(props);
    const buttons = mapArrayFieldButtons(props);
    const errors = mapErrors(props);

    return errors || items || buttons || header ? (
        <TemplateConfigProvider value={templateConfig}>
            <div className={classNames}>
                {errors}
                {header}
                {items}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
