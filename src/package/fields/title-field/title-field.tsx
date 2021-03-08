import React from "react";
import {createCn} from "bem-react-classname";
import {FieldProps} from "@rjsf/core";
import './title-field.scss';

const cn = createCn('title-field');

export function TitleField({ title}: FieldProps) {
    if (!title) return null;

    return (
        <div className={cn()}>
            {title}
        </div>
    );
}
