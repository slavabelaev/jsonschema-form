import React from "react";
import {createCn} from "bem-react-classname";
import {FieldProps} from "@rjsf/core";
import {fromMarkdown} from "../../utils/from-markdown";
import './description-field.scss';

const cn = createCn('description-field');

export function DescriptionField({ id, description }: FieldProps) {
    const text = description && fromMarkdown(description);

    if (!text) return null;

    return (
        <div id={id} className={cn()}>
            {text}
        </div>
    );
}
