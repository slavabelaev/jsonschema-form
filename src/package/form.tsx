import React from "react";
import {createCn} from "bem-react-classname";
import isEmpty from "lodash.isempty";
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
import './form.scss';

export type UiSchema = Omit<OriginUiSchema, 'ui:widget' | 'ui:options' | 'ui:expanded'> & {
    'ui:widget'?: OriginUiSchema['ui:widget'] | UiWidget;
    'ui:options'?: OriginUiSchema['ui:options'] | UiOptions;
    'ui:expanded'?: string[];
    'ui:template'?: TEMPLATE | string;
};

export type FormProps<T = any> = Omit<OriginFormProps<T>, 'uiSchema'> & {
    uiSchema?: UiSchema;
    size?: AruiFeatherFormProps['size'];
    theme?: AruiFeatherFormProps['theme'];
    view?: InputProps['view'];
    width?: InputProps['width'];
}

const cn = createCn('form');

function Form<T>({
    view = 'filled',
    size = 'm',
    theme = 'alfa-on-white',
    width = 'available',
    noValidate,
    uiSchema,
    formData,
    onSubmit,
    ...props
}: FormProps<T>) {
    const { $schema, ...schema } = props.schema || {};

    if (!props.schema) return  null;

    const submitButton = onSubmit ? (
        <Button
            className={cn('submit-button')}
            type="submit"
            theme={theme}
            size={size}
        >
            Отправить
        </Button>
    ) : <></>;

    return (
        <JSONSchemaForm
            className={cn()}
            showErrorList={false}
            FieldTemplate={FieldTemplate}
            ObjectFieldTemplate={ObjectFieldTemplate}
            ArrayFieldTemplate={ArrayFieldTemplate}
            {...props}
            schema={schema}
            uiSchema={uiSchema as OriginUiSchema}
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
                formNoValidate: noValidate,
                ...props.formContext
            }}
            transformErrors={errors => transformErrors(errors, schema)}
            noValidate={false}
            onSubmit={onSubmit}
        >
            {submitButton}
        </JSONSchemaForm>
    )
}

export default withErrorBoundary<FormProps>(Form);
