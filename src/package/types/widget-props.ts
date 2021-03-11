import {WidgetProps as OriginWidgetProps} from "@rjsf/core";
import {FormProps} from "arui-feather/form";
import {InputProps} from "arui-feather/input";
import {JSONSchema7} from "json-schema";


export type EnumOption = {
    value: string;
    label?: string;
    readonly?: boolean;
    schema?: JSONSchema7;
}

export type WidgetProps = Omit<OriginWidgetProps, 'formContext'> & {
    formContext: {
        view?: InputProps['view'];
        theme?: FormProps['theme'];
        size?: FormProps['size'];
        width?: InputProps['width'];
    }
}
