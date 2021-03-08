import React from 'react';
import {FieldProps} from "@rjsf/core";

export function AnyOfField(props: FieldProps) {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}
