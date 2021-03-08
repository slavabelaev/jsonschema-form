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
    const { classNames, children, rawErrors, schema } = props;
    const showErrorList = isObject(schema);

    const errorList = showErrorList && (
        <ErrorList errors={rawErrors?.map(fromMarkdown)} />
    );

    return (
        <div className={[cn(), classNames].join(' ')}>
            {errorList}
            {children}
        </div>
    )
}
