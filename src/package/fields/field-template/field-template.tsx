import React from "react";
import {createCn} from "bem-react-classname";
import {FieldTemplateProps} from "@rjsf/core";
import {JSONSchema7} from "json-schema";
import {ErrorList} from "../../components/error-list";
import {fromMarkdown} from "../../utils/from-markdown";
import './field-template.scss';

const cn = createCn('field-template');

const isObject = (schema: JSONSchema7) =>  (
    schema?.type === 'object' ||
    schema?.properties ||
    schema?.patternProperties ||
    schema?.additionalProperties
);

export function FieldTemplate(props: FieldTemplateProps) {
    const { classNames, children, rawErrors, schema, formContext } = props;
    const { theme } = formContext || {};
    const rootClassName = [cn(), classNames].join(' ');
    const showErrorList = isObject(schema);

    const errorList = showErrorList && (
        <ErrorList
            errors={rawErrors?.map(fromMarkdown)}
            theme={theme}
        />
    );

    return (
        <div className={rootClassName}>
            {errorList}
            {children}
        </div>
    )
}
