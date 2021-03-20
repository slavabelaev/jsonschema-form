# maxLength
Значение ДОЛЖНО быть целым числом, больше или равным *0*.

## Пример
Условие: верно, если длина строки меньше или равна значению **"maxLength"**.

```js
const isValid = ajv.compile({
    "type": "string",
    "maxLength": 3
})
```

```js
isValid("АБВ") // true
```

```js
isValid("АБВГ") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.3.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.3.1)
- [Understanding JSON Schema, Length](https://json-schema.org/understanding-json-schema/reference/string.html#length)
