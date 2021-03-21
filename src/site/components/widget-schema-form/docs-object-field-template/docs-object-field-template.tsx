import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import {ObjectFieldTemplateProps} from "@rjsf/core";
import {fromMarkdown} from "../../../../package/utils/from-markdown";
import {schemaToMarkdown} from "../utils/schema-to-markdown";
import './docs-object-field-template.scss';

const cn = createCn('docs-object-field-template');

export function DocsObjectFieldTemplate(props: ObjectFieldTemplateProps) {
    const { properties, schema } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const property = properties?.[selectedIndex];
    const { name, content } = property || {};
    const required = schema.required?.includes(name);
    const propertySchema = content?.props?.schema;
    const isObject = propertySchema?.type === 'object' || propertySchema?.properties;
    const hasProperties = properties.length > 0;

    const group = hasProperties
        ? properties.map((item, index) => (
            <li key={index}
                className={cn('list-item', {
                    selected: selectedIndex === index
                })}
                onClick={() => setSelectedIndex(index)}
            >
                {item.name}
            </li>
        ))
        : null;

    const schemaMarkdown = schemaToMarkdown({
        schema: propertySchema,
        required,
        name
    });
    const schemaDoc = (
        <div className={cn('doc')}>
            {fromMarkdown(schemaMarkdown)}
        </div>
    );

    const list = (
        <ul className={cn('list')}>
            {group}
        </ul>
    );

    const aside = (
        <aside className={cn('aside')}>
            {isObject ? property?.content : schemaDoc}
        </aside>
    );

    return hasProperties ? (
        <div className={cn()}>
            {list}
            {aside}
        </div>
    ) : null;
}
