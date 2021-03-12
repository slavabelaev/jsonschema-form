import React, {useContext} from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {Button} from "arui-feather/button";
import {IconButton} from "arui-feather/icon-button";
import Add from "arui-feather/icon/action/add";
import Delete from "arui-feather/icon/action/delete";
import {TemplateConfig, TemplateConfigContext, TemplateConfigProvider} from "../../providers/template-config-provider";
import {Grid, GridCell} from "../../components/grid";
import {Header} from "../../components/header";
import './object-field-template.scss';

const cn = createCn('object-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: true,
    displayHint: true
}

export function mapObjectFieldHeader(props: ObjectFieldTemplateProps, templateConfig: TemplateConfig) {
    const { displayLabel, displayHint } = templateConfig || {};
    const {
        title,
        description,
        formContext
    } = props;
    const { theme } = formContext || {};

    return (
        <Header
            className={cn('header')}
            theme={theme}
            title={displayLabel ? title : undefined}
            description={displayHint ? description : undefined}
        />
    );
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

function mapProperty(property: ObjectFieldTemplateProps['properties'][0], props: ObjectFieldTemplateProps) {
    const { formContext } = props;
    const { theme, size } = formContext || {}
    const { name, content } = property || {};
    const { onDropPropertyClick, schema, uiSchema } = content?.props || {};
    const isAdditionalProperty = schema?.['__additional_property'];

    const removeButton = isAdditionalProperty ? (
        <IconButton
            className={cn('remove-button')}
            onClick={onDropPropertyClick(property.name)}
            icon={<Delete theme={theme} size={size} />}
            theme={theme}
            size={size}
        />
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
    const templateConfig = useContext(TemplateConfigContext);
    const header = mapObjectFieldHeader(props, templateConfig);
    const properties = mapProperties(props);
    const buttons = mapObjectFieldButtons(props);

    return header || properties || buttons ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={[cn()].join(' ')}>
                {header}
                {properties}
                {buttons}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
