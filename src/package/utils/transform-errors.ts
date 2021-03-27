import {AjvError} from "@rjsf/core";
import template from 'lodash.template';
import get from 'lodash.get';
import {declension} from "./declension";
import {ErrorMessages} from "../types/error-messages";
import errorMessagesSchema from "../schemas/error-messages.schema.json";
import {CONFIG} from "../config";
import {FormProps} from "../form";
import {toCurrency, toDate, toDateTime, toFileSize, toNumber, toTime} from "./format-number";

function decodeRegex(regex: string) {
    const decoded = decodeURIComponent(regex);
    const isDecoded = regex !== decoded;

    if (!isDecoded) return regex;

    return decoded?.replace(/~0/g, '~')
        .replace(/~1/g, '/');
}

function getPathSchema(schema: FormProps['schema'], schemaPath: string) {
    const pathSegments = schemaPath?.split('/').map(decodeRegex);
    pathSegments?.shift();
    pathSegments?.pop();
    return pathSegments.length
        ? get(schema, pathSegments)
        : schema;
}

function getLimitGetters(params: any) {
    const { limit } = params || {};
    const hasLimit = typeof limit === 'number';

    const limitGetters = hasLimit && {
        get limitAsNumber() {
            return toNumber(limit);
        },
        get limitAsCurrency() {
            return toCurrency(limit);
        },
        get limitAsDate() {
            return toDate(limit);
        },
        get limitAsTime() {
            return toTime(limit);
        },
        get limitAsDateTime() {
            return toDateTime(limit);
        },
        get limitAsFileSize() {
            return toFileSize(limit);
        }
    }

    return {
        ...limitGetters
    }
}

function getSchemaGetters(schema: any) {
    const isString = schema?.type === 'string';
    const isNumeric = ['number', 'integer'].includes(schema?.type);

    const notEnumGetters = (isString || isNumeric) && {
        get notEnumAsNumbers() {
            return schema?.not?.enum?.map(toNumber)
        },
        get notEnumAsCurrencies() {
            return schema?.not?.enum?.map(toCurrency)
        },
        get notEnumAsDates() {
            return schema?.not?.enum?.map(toDate)
        },
        get notEnumAsTimes() {
            return schema?.not?.enum?.map(toTime)
        },
        get notEnumAsDateTimes() {
            return schema?.not?.enum?.map(toDateTime)
        },
        get notEnumAsFileSizes() {
            return schema?.not?.enum?.map(toFileSize)
        }
    }

    return {
        ...notEnumGetters
    }
}

const getDefaultMessage = (name: ErrorMessages['name']) => errorMessagesSchema.properties?.[name]?.default;

export function transformErrors(errors: AjvError[], schema: FormProps['schema']) {
    return errors.map(error => {
        const { schemaPath } = error as any || {};
        const pathSchema = getPathSchema(schema, schemaPath);
        const errorMessages = pathSchema?.['x-errorMessages'];
        const errorMessage = errorMessages?.[error.name] || getDefaultMessage(error.name);
        const compileError = template(errorMessage, CONFIG.template);
        const limitGetters = getLimitGetters(error.params);
        const schemaGetters = getSchemaGetters(pathSchema);

        const params = {
            ...error.params,
            ...limitGetters,
            ...schemaGetters
        };

        const transformedError = compileError({
            ...params,
            keyword: error.name,
            schema: pathSchema,
            declension,
            get help() {
                const json = JSON.stringify(params, null, 2);
                return `\n~~~json\n${json}\n~~~`;
            }
        });

        return ({
            ...error,
            message: transformedError || error.message,
            stack: transformedError
                ? `${error.property} ${transformedError}`
                : error.stack
        })
    });
}
