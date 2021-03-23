import React, {ReactNode, useContext, useEffect, useState} from 'react';
import {createCn} from "bem-react-classname";
import {Toggle} from "arui-feather/toggle";
import Form, {FormProps} from "../../../package";
import editorFormSchema from "./props-editor-form.schema.json";
import editorFormUiSchema from "./props-editor-form.ui-schema.json";
import {ThemeToggleContext} from "../../containers/theme-toggle";
import './props-editor-form.scss';

const cn = createCn('props-editor-form');

export type PropsEditorFormProps = {
    id: string;
    className?: string;
    initialProps?: FormProps;
    jsonModeEnabled?: boolean;
    toolbarActions?: ReactNode;
};

type State = {
    key?: string;
    jsonModeEnabled: boolean;
    formProps?: any;
    editorFormData?: any;
    jsonEditorFormData?: string;
}

const toJSON = (data: any) => data
    ? JSON.stringify(data, null, 2)
    : undefined;

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

export function PropsEditorForm(props: PropsEditorFormProps) {
    const { theme = 'alfa-on-white', setTheme } = useContext(ThemeToggleContext);
    const { initialProps, jsonModeEnabled = false, className } = props;
    const classNames = [cn({ theme: theme }), className].join(' ');
    const [state, _setState] = useState<State>();
    const setState = (state) => _setState({
        ...state,
        formProps: {
            ...state.formProps,
            key: props.id
        },
        editorFormData: {
            ...state.editorFormData,
            key: props.id
        }
    });

    useEffect(() => {
        const formProps = {
            ...state?.formProps,
            theme
        };
        setState({
            ...state,
            formProps,
            editorFormData: toEditorFormData(formProps),
            jsonEditorFormData: toJSON(formProps)
        })
    }, [theme]);

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
                if (formData.theme !== theme) {
                    setTheme?.(formData.theme);
                }

                try {
                    setState({
                        ...state,
                        formProps: {
                            ...state.formProps,
                            ...formData,
                            schema: JSON.parse(formData?.schema),
                            uiSchema: JSON.parse(formData?.uiSchema),
                            formData: JSON.parse(formData?.formData)
                        },
                        editorFormData: formData
                    })
                } catch {}
            }}
        />
    )

    const renderJSONEditor = () => (
        <Form
            key={'json-editor-form'}
            className={cn('json-editor-form')}
            schema={{
                title: "JSON-редактор",
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
                try {
                    const formProps = JSON.parse(formData);

                    if (formProps.theme !== theme) {
                        setTheme?.(formProps.theme);
                    }

                    setState({
                        ...state,
                        formProps,
                        jsonEditorFormData: formData,
                    });
                } catch {}
            }}
        />
    )

    const editor = state.jsonModeEnabled
        ? renderJSONEditor()
        : renderEditor();

    return (
        <div className={classNames}>
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
