import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import {Toggle} from "arui-feather/toggle";
import Form, {FormProps} from "../../../package";
import editorFormSchema from "./editor-form.schema.json";
import editorFormUiSchema from "./editor-form.ui-schema.json";
import {EditIconLink} from "../edit-icon-link";
import './form-props-editor.scss';
import {ThemeToggleContext} from "../theme-toggle";

const cn = createCn('form-props-editor');

export type FormPropsEditorProps = {
    className?: string;
    initialProps?: FormProps;
    jsonModeEnabled?: boolean;
    toolbarActions?: ReactNode;
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

export function FormPropsEditor(props: FormPropsEditorProps) {
    const { theme = 'alfa-on-white' } = useContext(ThemeToggleContext);
    const { initialProps, jsonModeEnabled = false, className } = props;
    const rootClassName = [cn({ theme }), className].join(' ');
    const [state, setState] = useState<any>();

    useEffect(() => {
        setState({
            jsonModeEnabled,
            formProps: initialProps,
            editorFormData: toEditorFormData(initialProps),
            jsonEditorFormData: toJSON(initialProps)
        });
    }, [initialProps, jsonModeEnabled]);

    if (!state) return null;

    const toggleJsonMode = () => {
        const newState = state.jsonModeEnabled ? {
            ...state,
            editorFormData: toEditorFormData(state.formProps)
        } : {
            ...state,
            jsonEditorFormData: toJSON(state.formProps)
        };
        setState({
            ...newState,
            jsonModeEnabled: !state.jsonModeEnabled
        })
    }

    const toggle = (
        <Toggle
            className={cn('toggle')}
            label={'JSON-режим'}
            labelAlign={'right'}
            size={'s'}
            checked={state.jsonModeEnabled}
            onChange={toggleJsonMode}
        />
    );

    const toolbar = (
        <div className={cn('toolbar')}>
            {toggle}
            {props.toolbarActions}
        </div>
    )

    const form = (
        <Form
            theme={theme}
            liveValidate={true}
            {...state?.formProps}
            onChange={({ formData }) => {
                const formProps = {
                    ...state.formProps,
                    formData
                };

                const newState = state.jsonModeEnabled ? {
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
            formData={state.editorFormData}
            size={'s'}
            theme={theme}
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
            formData={state.jsonEditorFormData}
            size={'s'}
            theme={theme}
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

    const editor = state.jsonModeEnabled
        ? renderJSONEditor()
        : renderEditor();

    return (
        <div className={rootClassName}>
            <div className={cn( 'result' )}>
                {form}
            </div>
            <div className={cn( 'editor' )}>
                {toolbar}
                {editor}
            </div>
        </div>
    );
}
