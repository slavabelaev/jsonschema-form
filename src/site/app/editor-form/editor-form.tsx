import React, {useState} from "react";
import {createCn} from "bem-react-classname";
import {Toggle} from "arui-feather/toggle";
import {FormProps} from "../../../package";
import Form from "../../../package/form";
import editorFormSchema from './editor-form.schema.json';
import editorFormUiSchema from './editor-form.ui-schema.json';
import {parseJSON, toJSON} from "../../utils/json";
import {EditIconLink} from "../edit-icon-link";
import './editor-form.scss';

const cn = createCn('editor-form');

export type EditorFormProps = Omit<FormProps, 'schema' | 'uiSchema'> & {
    editURL?: string;
};

export function EditorForm({
    editURL,
    theme,
    size,
    ...formProps
}: EditorFormProps) {
    const [enabled, setEnabled] = useState(false);
    const toggleEnabled = () => setEnabled(!enabled);

    const editLink = editURL && (
        <EditIconLink
            url={editURL}
            hint={'Редактировать на GitHub'}
            theme={theme}
        />
    )

    const toggle = (
        <Toggle
            className={cn('toggle')}
            label={'JSON-режим'}
            labelAlign={'right'}
            theme={theme}
            size={'s'}
            checked={enabled}
            onChange={toggleEnabled}
        />
    );

    const toolbar = (
        <div className={cn('toolbar')}>
            {toggle}
            {editLink}
        </div>
    )

    const renderJSONEditor = () => {
        return (
            <Form
                key={'json-editor'}
                className={cn('editor-form')}
                schema={{
                    title: "Editor",
                    type: "string",
                    contentMediaType: "application/json"
                }}
                uiSchema={{
                    'ui:options': {
                        height: 'calc(100vh - 113px)'
                    }
                }}
                size={'s'}
                theme={theme}
                {...formProps}
            />
        )
    }

    const renderEditor = () => {
        const editorFormProps = parseJSON(formProps.formData);
        const { schema, uiSchema, formData, ...otherProps } = editorFormProps || {};
        return (
            <Form
                key={'editor'}
                className={cn('editor-form')}
                schema={editorFormSchema as FormProps['schema']}
                uiSchema={editorFormUiSchema}
                theme={theme}
                size={'s'}
                formData={{
                    schema: toJSON(schema),
                    uiSchema: toJSON(uiSchema),
                    formData: toJSON(formData),
                    ...otherProps
                }}
                onChange={(props) => {
                    try {
                        const { schema, uiSchema, formData } = props.formData || {};

                        formProps?.onChange?.({
                            ...props,
                            formData: toJSON({
                                ...props.formData,
                                schema: schema ? JSON.parse(schema) : undefined,
                                uiSchema: uiSchema ? JSON.parse(uiSchema) : undefined,
                                formData: formData ? JSON.parse(formData) : undefined,
                            })
                        });
                    } catch {}
                }}
            />
        )
    }

    const editor = enabled
        ? renderJSONEditor()
        : renderEditor();

    return (
        <div className={cn('editor')}>
            {toolbar}
            {editor}
        </div>
    )
}
