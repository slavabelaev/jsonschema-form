import React from 'react';
import {JSONSchema7} from "json-schema";
import {Form, UiSchema} from "../../../package";

const schema: JSONSchema7 = {
    properties: {
        typeScript: {
            title: "TypeScript",
            type: "string",
            contentMediaType: "text/typescript",
            readOnly: true
        },
        java: {
            title: "Java",
            type: "string",
            contentMediaType: "x-text/java",
            readOnly: true
        }
    }
}

const uiSchema: UiSchema = {
    "ui:template": "collapse-list",
    "ui:expanded": ["typeScript"],
    typeScript: {
        "ui:widget": "editor"
    },
    java: {
        "ui:widget": "editor"
    }
}

const formData = {
    typeScript:
`import React from "react";
import {JSONSchema7} from "json-schema";
import {Form, UiSchema} from "@arui-feather/jsonschema-form";

const schema: JSONSchema7 = {};

const uiSchema: UiSchema = {};

export function SampleForm() {
    return (
        <Form
            schema={schema}
            uiSchema={uiSchema}
        />
    )
}
`
}

export function CopyCodeForm() {
    return (
        <Form
            schema={schema}
            uiSchema={uiSchema}
            formData={formData}
        />
    );
}
