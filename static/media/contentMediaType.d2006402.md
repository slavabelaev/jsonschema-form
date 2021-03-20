# contentMediaType
Значение ДОЛЖНО быть строкой.

Описывает тип содержимого с помощью mime-типов согласно спецификации [RFC 2054, часть 6.1](https://tools.ietf.org/html/rfc2046).

Существует [список MIME-типов, официально зарегистрированных IANA](https://www.iana.org/assignments/media-types/media-types.xhtml), и более [короткий список от сообщества Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types), наиболее важных для Интернета.

## Пример
```js
const isValid = ajv.compile({
    "type": "string",
    "contentMediaType": "text/html"
})
```

```js
isValid("<!DOCTYPE html><html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head></html>") // true
```

## Ссылки
- [JSON Schema Validation, draft 07, section 8.4](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.8.4)
- [Understanding JSON Schema, contentMediaType](https://json-schema.org/understanding-json-schema/reference/non_json_data.html#contentmediatype)
