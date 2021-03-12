import React, {useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import {Toggle} from "arui-feather/toggle";
import Form, {FormProps} from "../../../package";
import editorFormSchema from "../editor-form/editor-form.schema.json";
import editorFormUiSchema from "../editor-form/editor-form.ui-schema.json";
import {EditIconLink} from "../edit-icon-link";
import './sample-editor.scss';

const cn = createCn('sample-editor');

export type SampleEditorProps = {
    className?: string;
    initialFormProps?: FormProps;
};

const toJSON = (data: any) => data
    ? JSON.stringify(data, null, 2)
    : undefined;

const parseJSON = (json?: string) => {
    if (!json) return;

    try {
        return JSON.parse(json)
    } catch {}
}

const toEditorFormData = (props?: FormProps) => {
    if (!props) return;

    const { schema, uiSchema, formData, ...otherProps } = props;
    return {
        ...otherProps,
        schema: toJSON(schema),
        uiSchema: toJSON(uiSchema),
        formData: toJSON(formData)
    }
}

export function SampleEditor(props: SampleEditorProps) {
    const { initialFormProps, className } = props;
    const rootClassName = [cn(), className].join(' ');
    const [state, setState] = useState<any>();
    const { jsonModeEnabled = false } = state || {};

    useEffect(() => {
        setState({
            jsonModeEnabled: false,
            formProps: initialFormProps,
            editorFormData: toEditorFormData(initialFormProps),
            jsonEditorFormData: toJSON(initialFormProps)
        });
    }, [initialFormProps]);

    if (!state) return null;

    const toggleJsonMode = () => {
        const newState = jsonModeEnabled ? {
            ...state,
            editorFormData: toEditorFormData(state.formProps)
        } : {
            ...state,
            jsonEditorFormData: toJSON(state.formProps)
        };
        setState({
            ...newState,
            jsonModeEnabled: !jsonModeEnabled
        })
    }

    const editLink = (
        <EditIconLink
            url={'#'}
            hint={'Редактировать на GitHub'}
        />
    )

    const toggle = (
        <Toggle
            className={cn('toggle')}
            label={'JSON-режим'}
            labelAlign={'right'}
            size={'s'}
            checked={jsonModeEnabled}
            onChange={toggleJsonMode}
        />
    );

    const toolbar = (
        <div className={cn('toolbar')}>
            {toggle}
            {editLink}
        </div>
    )

    const form = (
        <Form
            {...state?.formProps}
            onChange={({ formData }) => {
                const formProps = {
                    ...state.formProps,
                    formData
                };

                const newState = jsonModeEnabled ? {
                    ...state,
                    formProps,
                    jsonEditorFormData: toJSON(formProps)
                } : {
                    ...state,
                    formProps,
                    editorFormData: {
                        ...state.editorFormData,
                        formData: toJSON(formData)
                    }
                };
                setState(newState);
            }}
        />
    );

    const renderEditor = () => (
        <Form
            key={'editor-form'}
            className={cn('editor-form')}
            schema={editorFormSchema as FormProps['schema']}
            uiSchema={editorFormUiSchema}
            size={'s'}
            formData={state.editorFormData}
            onChange={({ formData }) => {
                setState({
                    ...state,
                    formProps: {
                        ...state.formProps,
                        schema: parseJSON(formData?.schema),
                        uiSchema: parseJSON(formData?.uiSchema),
                        formData: parseJSON(formData?.formData)
                    },
                    editorFormData: formData
                })
            }}
        />
    )

    const renderJSONEditor = () => (
        <Form
            key={'json-editor-form'}
            className={cn('json-editor-form')}
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
            formData={state.jsonEditorFormData}
            onChange={({ formData }) => {
                const formProps = parseJSON(formData);

                setState({
                    ...state,
                    formProps,
                    jsonEditorFormData: formData,
                });
            }}
        />
    )

    return (
        <div className={rootClassName}>
            <div className={cn( 'result' )}>
                {form}
            </div>
            <div className={cn( 'editor' )}>
                {toolbar}
                {jsonModeEnabled ? renderJSONEditor() : renderEditor()}
            </div>
        </div>
    );
}
