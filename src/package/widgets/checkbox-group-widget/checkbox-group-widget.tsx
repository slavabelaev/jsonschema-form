import React from 'react';
import {createCn} from "bem-react-classname";
import {Label} from "arui-feather/label";
import {CheckBoxGroup, CheckBoxGroupProps} from "arui-feather/checkbox-group";
import {CheckBox} from "arui-feather/checkbox";
import {EnumOption, WidgetProps} from "../../types/widget-props";
import {toType} from "../../utils/to-type";
import {mapEnumOptions} from "../../utils/map-enum-options";
import {mapCheckboxSize} from "../checkbox-widget";
import {mapLabelProps} from "../label-widget";
import {Helper} from "../../components/helper";
import {mapHelperProps} from "../../utils/map-helper-props";
import './checkbox-group-widget.scss';

const cn = createCn('checkbox-group-widget');

export type CheckBoxGroupUiOptions = Omit<CheckBoxGroupProps,
    'name' |
    'id' |
    'className' |
    'children' |
    'disabled' |
    'label' |
    'theme' |
    'value' |
    'onChange' |
    'onBlur' |
    'onFocus'
>

export function mapCheckboxGroupProps(props: WidgetProps): CheckBoxGroupProps {
    const {
        value,
        id,
        label,
        disabled,
        readonly,
        schema,
        formContext,
        onChange,
        onBlur,
        onFocus,
    } = props;
    const className = [cn(), props.className].join(' ');
    const uiOptions = props.options as CheckBoxGroupUiOptions;

    const toInput = (value?: any): CheckBoxGroupProps['value'] => {
        if (value instanceof Array) return value;
        switch (typeof value) {
            case "undefined": return;
            default: return toType(value, 'array');
        }
    };

    const handleChange: CheckBoxGroupProps['onChange'] = (newValue) => {
        switch (schema.type) {
            case "array": onChange(newValue);
                break;
            default: {
                const output = toType(newValue, schema.type);
                onChange(output);
            }
        }
    }

    const renderOption = ({ label, value, readonly }: EnumOption) => (
        <CheckBox
            className={cn('checkbox')}
            key={value}
            value={value}
            disabled={readonly}
            text={label || value}
            theme={formContext?.theme}
            width={formContext?.width}
            type={uiOptions.type === 'button' ? 'button' : undefined}
            size={mapCheckboxSize(props)}
        />
    )

    return {
        "data-test-id": undefined,
        id: undefined,
        name: undefined,
        type: undefined,
        ...uiOptions,
        className,
        children: mapEnumOptions(props).map(renderOption),
        disabled: disabled || readonly || undefined,
        label,
        theme: formContext?.theme,
        value: toInput(value),
        onChange: handleChange,
        onBlur: () => onBlur(id, value),
        onFocus: () => onFocus(id, value)
    }
}

export function CheckBoxGroupWidget(props: WidgetProps) {
    return (
        <div className='checkbox-group-widget'>
            <Label {...mapLabelProps(props)}/>
            <CheckBoxGroup {...mapCheckboxGroupProps(props)}/>
            <Helper {...mapHelperProps(props)}/>
        </div>
    );
}
