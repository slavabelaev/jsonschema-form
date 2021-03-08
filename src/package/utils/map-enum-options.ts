import {EnumOption, WidgetProps} from "../types/widget-props";
import {JSONSchema7} from "json-schema";
import {toType} from "./to-type";

function getOptionSchemas(schema: JSONSchema7): JSONSchema7[] {
    const { items } = schema;
    if (items instanceof Array) return items as JSONSchema7[];
    if (typeof items === 'object') {
        if (items.anyOf instanceof Array) return items.anyOf as JSONSchema7[];
        if (items.oneOf instanceof Array) return items.oneOf as JSONSchema7[];
        if (items.allOf instanceof Array) return items.allOf as JSONSchema7[];
    }
    if (schema.anyOf instanceof Array) return schema.anyOf as JSONSchema7[];
    if (schema.oneOf instanceof Array) return schema.oneOf as JSONSchema7[];
    if (schema.allOf instanceof Array) return schema.allOf as JSONSchema7[];
    return [];
}

function getNotAllowedOptions(schema: JSONSchema7): string[] {
    const { items, not } = schema;
    const { not: itemsSchemaNot } = items as JSONSchema7 || {};
    const { enum: itemsSchemaEnum } = itemsSchemaNot as JSONSchema7 || {};
    const { enum: schemaEnum } = not as JSONSchema7 || {};
    if (itemsSchemaEnum instanceof Array) return itemsSchemaEnum as [];
    if (schemaEnum instanceof Array) return schemaEnum as [];
    return [];
}

export function mapEnumOptions(props: WidgetProps): EnumOption[] {
    const { schema, options } = props;
    const { enumOptions } = options || {};
    const optionSchemas = getOptionSchemas(schema);
    const notAllowedOptions = getNotAllowedOptions(schema);

    if (enumOptions instanceof Array) {
        return enumOptions.map(({ value, label }, index) => ({
            label: label,
            value: toType(value, 'string'),
            readonly: optionSchemas?.[index]?.readOnly || notAllowedOptions?.includes?.(value),
            schema: optionSchemas?.[index],
        }));
    }

    return [];
}
