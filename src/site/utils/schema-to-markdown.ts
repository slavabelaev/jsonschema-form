import {JSONSchema7} from "json-schema";

const toCode = (value: any) => '```' + String(value) + '```';
const stringify = (item: any) => JSON.stringify(item);

export type SchemaToMarkdownType = {
    schema: JSONSchema7,
    name?: string;
    required?: boolean;
}

export function schemaToMarkdown({ schema, name, required = false }: SchemaToMarkdownType) {
    const { type, title = name, description } = schema || {};
    const headingMd = title ? `### ${title}` : '';
    const descriptionMd = description ? `${description}` : '';
    const rows = Object.entries({
        'Обязательное': required,
        'Тип': type,
        'Доступные значения': schema?.enum?.map?.(stringify).join(', '),
        'По умолчанию': stringify(schema?.default),
        'Примеры': (schema?.examples as [])?.map?.(stringify).join(', '),
        'ReactType': schema?.$comment?.split('|').join(','),
    }).map(
        ([name, value]) => (value !== undefined) ? `|${name}|${toCode(value)}|\n` : ''
    ).join('');

    return `
${headingMd}
${descriptionMd}
|   |   |
| - | - |
${rows}
`
}
