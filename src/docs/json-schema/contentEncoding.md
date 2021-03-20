# contentEncoding
Значение ДОЛЖНО быть строкой.

Описывает кодировку содержимого, согласно [RFC 2054, часть 6.1](https://tools.ietf.org/html/rfc2045). Используйте одну из следующих кодировок: *"base64"*, *"7bit"*, *"8bit"*, *"binary"*, *"quoted-printable"*.

Если содержимое представляет собой двоичные данные, используйте кодировку *"base64"*, указав тип содержимого в **"contentMediaType"**, например *"image/png"* для изображений.

## Пример
```js
const isValid = ajv.compile({
    "type": "string",
    "contentEncoding": "base64",
    "contentMediaType": "image/png"
})
```

```js
isValid("iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA...") // true
```

## Ссылки
- [JSON Schema Validation, draft 07, section 8.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.8.3)
- [Understanding JSON Schema, contentEncoding](https://json-schema.org/understanding-json-schema/reference/non_json_data.html#contentencoding)
