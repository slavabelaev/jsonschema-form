import React from "react";
import {createCn} from "bem-react-classname";
import {Toggle, ToggleProps} from "arui-feather/toggle";
import {FormProps} from "arui-feather/form";
import {WidgetProps} from "../../types/widget-props";
import {mapCheckboxProps} from "../checkbox-widget";
import {fromMarkdown} from "../../utils/from-markdown";
import {Helper} from "../../components/helper";
import {mapHelperProps} from "../../utils/map-helper-props";
import "./toggle-widget.scss";

const cn = createCn('toggle-widget');

export type ToggleUiOptions = Omit<ToggleProps,
    'name' |
    'checked' |
    'className' |
    'disabled' |
    'hint' |
    'id' |
    'label' |
    'size' |
    'theme' |
    'value' |
    'onChange' |
    'onBlur' |
    'onFocus'
>

const mapToggleSize = (size: FormProps['size']): ToggleProps['size'] => {
    switch(size) {
        case 's':
        case 'm': return size;
        default: return 'm';
    }
}

export function mapToggleProps(props: WidgetProps): ToggleProps {
    const {
        label,
        schema,
        rawErrors,
        formContext
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as ToggleUiOptions;
    const {
        id,
        checked,
        value,
        disabled,
        onChange,
        onFocus,
        onBlur
    } = mapCheckboxProps(props);
    const error = rawErrors?.[0];

    const hint = error ? (
        <Helper {...mapHelperProps(props)} />
    ) : fromMarkdown(schema.description);

    return {
        "data-test-id": undefined,
        id: undefined,
        name: undefined,
        labelAlign: undefined,
        ...uiOptions,
        className,
        checked,
        disabled,
        hint,
        label,
        size: mapToggleSize(formContext?.size),
        theme: formContext.theme,
        value,
        onChange,
        onBlur,
        onFocus
    }
}

export function ToggleWidget(props: WidgetProps) {
    return <Toggle {...mapToggleProps(props)} />
}
