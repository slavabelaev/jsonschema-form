import React, {useContext} from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {mapObjectFieldButtons, mapObjectFieldHeader} from "../object-field-template";
import {CollapseItem} from "../../../components/collapse-item";
import {UiSchema} from "../../../form";
import {
    TemplateConfig,
    TemplateConfigContext,
    TemplateConfigProvider
} from "../../../providers/template-config-provider";
import {fromMarkdown} from "../../../utils/from-markdown";
import './collapse-list-field-template.scss';

const cn = createCn('collapse-list-field-template');

export const defaultTemplateConfig: TemplateConfig = {
    displayLabel: false,
    displayHint: false
}

export function CollapseListFieldTemplate(props: ObjectFieldTemplateProps) {
    const templateConfig = useContext(TemplateConfigContext);
    const { properties, uiSchema, formContext } = props;
    const { size, theme } = formContext || {};
    const expanded = (uiSchema as UiSchema)?.["ui:expanded"] || [];
    const hasProperties = properties.length > 0;
    const header = mapObjectFieldHeader(props, templateConfig);
    const addButton = mapObjectFieldButtons(props);

    const mapProperty = (property: any) => {
        const { name, content } = property || {};
        const { props } = content || {};
        const { schema, errorSchema } = props || {};
        const { title, description } = schema || {};
        const label = typeof title === 'string' ? title : name;
        const hint = fromMarkdown(description);
        const isExpanded = expanded?.includes(name);
        const hasError = Object.keys(errorSchema).length > 0;

        return (
            <CollapseItem
                key={name}
                label={label}
                hint={hint}
                children={content}
                hasError={hasError}
                isExpanded={isExpanded}
                size={size}
                theme={theme}
            />
        )
    }

    const collapseList = properties?.map(mapProperty);

    return header || hasProperties || addButton ? (
        <TemplateConfigProvider value={defaultTemplateConfig}>
            <div className={cn()}>
                {header}
                {collapseList}
                {addButton}
            </div>
        </TemplateConfigProvider>
    ) : null;
}
