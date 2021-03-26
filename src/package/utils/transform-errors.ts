import {AjvError} from "@rjsf/core";
import {JSONSchema7} from "json-schema";
import template from 'lodash.template';
import get from 'lodash.get';
import fileSize from "filesize";
import {declension} from "./declension";
import {ErrorMessages} from "../types/error-messages";
import errorMessagesSchema from "../schemas/error-messages.schema.json";
import {CONFIG} from "../config";
import {FormProps} from "../form";
import {toCurrency, toDate, toDateTime, toNumber, toTime} from "./format-number";

export type TransformNumber = (number?: number) => string;

function getMinMaxRanges(schema: JSONSchema7, transformNumber?: TransformNumber): string[] {
    const { anyOf, oneOf } = schema || {};
    return (anyOf || oneOf)?.map((item): string => {
        const { minimum, maximum } = (item as JSONSchema7) || {};
        const hasMinimum = Number.isFinite(minimum as number);
        const hasMaximum = Number.isFinite(maximum as number);
        if (!hasMinimum || !hasMaximum) return '';
        const currencyMinimum = transformNumber?.(minimum) || minimum;
        const currencyMaximum = transformNumber?.(maximum) || maximum;
        return `${currencyMinimum}-${currencyMaximum}`;
    }).filter(Boolean) || [];
}

function decodeRegex(regex: string) {
    const decoded = decodeURIComponent(regex);
    const isDecoded = regex !== decoded;

    if (!isDecoded) return regex;

    return decoded?.replace(/~0/g, '~')
        .replace(/~1/g, '/');
}

function getSchema(schema: FormProps['schema'], schemaPath: string) {
    const pathSegments = schemaPath?.split('/').map(decodeRegex);
    pathSegments?.shift();
    pathSegments?.pop();
    return pathSegments.length
        ? get(schema, pathSegments)
        : schema;
}

function getLimitGetters(params: any, schema: any) {
    const { limit } = params || {};
    const hasLimit = typeof limit === 'number';
    const isString = schema?.type === 'string';
    const isNumeric = ['number', 'integer'].includes(schema?.type);

    const numericGetters = hasLimit && {
        get limitNumber() {
            return toNumber(limit);
        },
        get limitCurrency() {
            return toCurrency(limit);
        },
        get limitDate() {
            return toDate(limit);
        },
        get limitTime() {
            return toTime(limit);
        },
        get limitDateTime() {
            return toDateTime(limit);
        },
        get limitFileSize() {
            const bytes = (3 * (limit / 4)) || 0;
            return fileSize(bytes);
        }
    }

    const otherGetters = (isString || isNumeric) && {
        get notAllowedNumbers() {
            return schema?.not?.enum?.map(toNumber).join('; ')
        },
        get notAllowedCurrencies() {
            return schema?.not?.enum?.map(toCurrency).join('; ')
        },
        get notAllowedDates() {
            return schema?.not?.enum?.map(toDate).join('; ')
        },
        get notAllowedTimes() {
            return schema?.not?.enum?.map(toTime).join('; ')
        },
        get notAllowedDateTimes() {
            return schema?.not?.enum?.map(toDateTime).join('; ')
        },
        get allowedDateRanges() {
            return getMinMaxRanges(schema, toDate).join('; ')
        },
        get allowedTimeRanges() {
            return getMinMaxRanges(schema, toTime).join('; ')
        },
        get allowedDateTimeRanges() {
            return getMinMaxRanges(schema, toDateTime).join('; ')
        },
        get allowedNumberRanges() {
            return getMinMaxRanges(schema, toNumber).join('; ')
        },
        get allowedCurrencyRanges() {
            return getMinMaxRanges(schema, toCurrency).join('; ')
        },
        get notAllowedNumberRanges() {
            return getMinMaxRanges(schema?.not, toNumber).join('; ');
        },
        get notAllowedCurrencyRanges() {
            return getMinMaxRanges(schema?.not, toCurrency).join('; ');
        },
        get notAllowedDateRanges() {
            return getMinMaxRanges(schema?.not, toDate).join('; ');
        },
        get notAllowedDateTimeRanges() {
            return getMinMaxRanges(schema?.not, toDateTime).join('');
        },
        get notAllowedTimeRanges() {
            return getMinMaxRanges(schema?.not, toTime).join('');
        }
    }

    return {
        ...numericGetters,
        ...otherGetters
    }
}

const getDefaultMessage = (name: ErrorMessages['name']) => errorMessagesSchema.properties?.[name]?.default;

export function transformErrors(errors: AjvError[], schema: FormProps['schema']) {
    return errors.map(error => {
        const { schemaPath } = error as any || {};
        const subSchema = getSchema(schema, schemaPath);
        const errorMessages = subSchema?.['x-errorMessages'];
        const errorMessage = errorMessages?.[error.name] || getDefaultMessage(error.name);
        const compileError = template(errorMessage, CONFIG.template);
        const limitGetters = getLimitGetters(error.params, subSchema);

        const params = {
            ...subSchema,
            ...error.params,
            ...limitGetters
        };

        const transformedError = compileError({
            ...params,
            keyword: error.name,
            schema: subSchema,
            declension,
            get help() {
                const json = JSON.stringify(params, null, 2);
                return '\n##### Параметры: \n```json\n' + json + '\n```';
            }
        });

        return ({
            ...error,
            message: transformedError || error.message,
            stack: transformedError ? `${error.property} ${transformedError}` : error.stack
        })
    });
}
