import React, {useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import Form, {FormProps} from "@rjsf/core";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import {JSONSchema6, JSONSchema7} from "json-schema";
import {DocsFieldTemplate} from "./docs-field-template";
import {DocsObjectFieldTemplate} from "./docs-object-field-template";
import schemaOfUiSchema from "../../../package/schemas/ui-schema.schema.json";
import {DocsArrayFieldTemplate} from "./docs-array-field-template";
import './ui-schema-form.scss';

const cn = createCn('ui-schema-form');

export type WidgetSchemaFormProps = {
    widgetName: string;
};

const getWidgetSchema = (schema: JSONSchema7, widgetName: string) => {
    return (schema as any)?.definitions?.widgets?.definitions?.[widgetName];
}

export default function WidgetSchemaForm({ widgetName }: WidgetSchemaFormProps) {
    const [schema, setSchema] = useState<FormProps<any>['schema']>();
    const widgetSchema = (schema && widgetName) && getWidgetSchema(schema, widgetName);

    useEffect(() => {
        $RefParser.dereference(schemaOfUiSchema as JSONSchema6)
            .then(schema => setSchema(schema as JSONSchema7));
    }, []);

    return widgetSchema ? (
        <Form
            className={cn()}
            FieldTemplate={DocsFieldTemplate}
            ObjectFieldTemplate={DocsObjectFieldTemplate}
            ArrayFieldTemplate={DocsArrayFieldTemplate}
            schema={widgetSchema}
        ><></></Form>
    ) : null;
}
