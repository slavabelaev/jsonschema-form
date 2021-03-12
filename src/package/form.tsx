import React, {ReactNode, useState} from "react";
import {createCn} from "bem-react-classname";
import JSONSchemaForm, {FormProps as OriginFormProps, UiSchema as OriginUiSchema} from "@rjsf/core";
import {Button} from "arui-feather/button";
import {InputProps} from "arui-feather/input";
import {FormProps as AruiFeatherFormProps} from "arui-feather/form";
import {FieldTemplate} from "./fields/field-template";
import {ObjectFieldTemplate, TEMPLATE} from "./fields/object-field-template";
import {ArrayFieldTemplate} from "./fields/array-field-template";
import {transformErrors} from "./utils/transform-errors";
import {widgets, UiOptions, UiWidget} from "./widgets";
import {TitleField} from "./fields/title-field";
import {DescriptionField} from "./fields/description-field";
import {withErrorBoundary} from "./utils/with-error-boundary";
import {AnyOfField} from "./fields/any-of-field";
import {UnsupportedField} from "./fields/unsupported-field";
import {SuccessNotification} from "./components/success-notification";
import './form.scss';

export type UiSchema = Omit<OriginUiSchema, 'ui:widget' | 'ui:options' | 'ui:expanded'> & {
    'ui:widget'?: OriginUiSchema['ui:widget'] | UiWidget;
    'ui:options'?: OriginUiSchema['ui:options'] | UiOptions;
    'ui:expanded'?: string[];
    'ui:template'?: TEMPLATE | string;
};

export type FormProps<T = any> = Omit<OriginFormProps<T>, 'uiSchema' | 'children'> & {
    uiSchema?: UiSchema;
    size?: AruiFeatherFormProps['size'];
    theme?: AruiFeatherFormProps['theme'];
    view?: InputProps['view'];
    width?: InputProps['width'];
    submitText?: ReactNode;
}

function submitFormData(url, method, formData) {
    if (!url) return;

    const actionURL = new URL(url);
    const isMethodGET = method === 'GET';
    const json = JSON.stringify(formData);

    if (isMethodGET) {
        actionURL.searchParams.append('formData', json);
    }

    return fetch(actionURL.toString(), {
        method,
        body: isMethodGET ? undefined : json,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        const contentType = response.headers['Content-Type'];
        switch (contentType) {
            case 'application/json': return response.json();
            default: return response.text();
        }
    });
}

const cn = createCn('form');

export function Form<T>({
    view = 'filled',
    size = 'm',
    theme = 'alfa-on-white',
    width = 'available',
    noValidate,
    uiSchema,
    formData,
    action,
    method,
    onSubmit,
    submitText = 'Отправить',
    ...props
}: FormProps<T>) {
    const { $schema, ...schema } = props.schema || {};
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit: FormProps['onSubmit'] = (props) => {
        submitFormData(action, method, props.formData)
            ?.then(() => setSubmitted(true))
            .catch(console.log);
        onSubmit?.(props);
    }

    if (!props.schema) return null;

    if (submitted) {
        return (
            <SuccessNotification
                buttonProps={{
                    onClick: () => setSubmitted(false)
                }}
            />
        );
    }

    const submitButton = action ? (
        <Button
            className={cn('submit-button')}
            type='submit'
            view='extra'
            theme={theme}
            size={size}
        >
            {submitText}
        </Button>
    ) : <></>;

    return (
        <JSONSchemaForm
            className={cn({ theme })}
            showErrorList={false}
            FieldTemplate={FieldTemplate}
            ObjectFieldTemplate={ObjectFieldTemplate}
            ArrayFieldTemplate={ArrayFieldTemplate}
            {...props}
            action={action}
            method={method}
            uiSchema={uiSchema as OriginUiSchema}
            schema={schema}
            formData={formData}
            fields={{
                TitleField,
                DescriptionField,
                AnyOfField,
                OneOfField: AnyOfField,
                UnsupportedField,
                ...props.fields
            }}
            widgets={{
                ...widgets,
                ...props.widgets
            }}
            formContext={{
                view,
                size,
                theme,
                width,
                ...props.formContext
            }}
            transformErrors={errors => transformErrors(errors, schema)}
            noValidate={false}
            onSubmit={handleSubmit}
        >
            {submitButton}
        </JSONSchemaForm>
    )
}

export default withErrorBoundary<FormProps>(Form);
