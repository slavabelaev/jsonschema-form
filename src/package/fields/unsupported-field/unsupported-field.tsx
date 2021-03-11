import React from "react";
import {createCn} from "bem-react-classname";
import {FieldProps} from "@rjsf/core";
import {Markdown} from "../../components/markdown";
import {ErrorList} from "../../components/error-list";
import './unsupported-field.scss';

const cn = createCn('unsupported-field');

export type UnsupportedFieldProps = FieldProps & {
    reason?: string;
}

export function UnsupportedField(props: UnsupportedFieldProps) {
    const { schema, reason, idSchema, formContext } = props || {};
    const { theme } = formContext || {};
    const { $id } = idSchema || {};
    const schemaAsJSON = JSON.stringify(schema, null, 2);
    const schemaMarkdown = '```json\n' + schemaAsJSON + '\n```';

    const error = reason && (
        <ErrorList
            className={cn('error')}
            errors={[reason]}
            title={`Схема не поддерживается для ${$id}`}
            theme={theme}
        />
    );

    const markdown = schemaMarkdown && (
        <Markdown>
            {schemaMarkdown}
        </Markdown>
    );

    return (
        <div className={cn()}>
            {error}
            {markdown}
        </div>
    )
}
