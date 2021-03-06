import React from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {Button} from "arui-feather/button";
import Add from "arui-feather/icon/action/add";
import Delete from "arui-feather/icon/action/delete";
import {TemplateConfig, TemplateConfigProvider} from "../../providers/template-config-provider";
import {Grid, GridCell} from "../../components/grid";
import {Tooltip} from "../../components/tooltip";
import './object-field-template.scss';

const cn = createCn('object-field-template');

export type ObjectFieldProperty = ObjectFieldTemplateProps['properties'][0];

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: true,
    displayHint: true
}

export function mapObjectFieldButtons(props: ObjectFieldTemplateProps) {
    const {
        properties,
        schema,
        onAddClick,
        formContext: {
            theme,
            size
        }
    } = props;

    const propertyLimitExceeded = properties.length >= (schema.maxProperties || Number.MAX_SAFE_INTEGER);
    const hasAddButton = schema.additionalProperties && !propertyLimitExceeded;

    const addButton = (
        <Button
            className={cn('add-button')}
            onClick={onAddClick(schema)}
            icon={<Add theme={theme} />}
            theme={theme}
            size={size}
        >
            Добавить
        </Button>
    );

    return hasAddButton && (
        <div className={cn('buttons')}>
            {addButton}
        </div>
    );
}

function mapProperty(property: ObjectFieldProperty, props: ObjectFieldTemplateProps) {
    const { formContext } = props;
    const { theme, size } = formContext || {}
    const { name, content } = property || {};
    const { onDropPropertyClick, schema, uiSchema } = content?.props || {};
    const { __additional_property: isAdditional } = schema || {};

    const removeButton = isAdditional ? (
        <Tooltip
            className={cn('remove-button')}
            popupContent={'Удалить'}
            popupProps={{
                directions: ['left-center']
            }}
            theme={theme}
            size={size}
            onClick={onDropPropertyClick(property.name)}
        >
            <Delete theme={theme} size={size} />
        </Tooltip>
    ) : null;

    const contentBlock = (
        <div className={cn('content')}>
            {content}
        </div>
    );

    return (
        <GridCell
            key={name}
            className={cn('property')}
            column={uiSchema?.['ui:gridColumn']}
            row={uiSchema?.['ui:gridRow']}
        >
            {contentBlock}
            {removeButton}
        </GridCell>
    );
}

function mapProperties(props: ObjectFieldTemplateProps) {
    const { properties } = props;
    const items = properties?.map(item => mapProperty(item, props));

    return items?.length ? (
        <Grid className={cn('properties')}>
            {items}
        </Grid>
    ) : null;
}

export function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
    const properties = mapProperties(props);
    const buttons = mapObjectFieldButtons(props);

    return properties || buttons ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={[cn()].join(' ')}>
                {properties}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
