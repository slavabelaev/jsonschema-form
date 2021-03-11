import React from "react";
import {createCn} from "bem-react-classname";
import {FieldProps} from "@rjsf/core";
import {Heading} from "arui-feather/heading";
import './title-field.scss';

const cn = createCn('title-field');

export function TitleField({ title, formContext }: FieldProps) {
    const { theme } = formContext || {};

    if (!title) return null;

    return (
        <Heading
            className={cn()}
            hasDefaultMargins={false}
            theme={theme}
            size={'s'}
        >
            {title}
        </Heading>
    );
}
