# minLength
Значение ДОЛЖНО быть целым числом больше или равным *0*.

Если отсутствует, рассматривается как равное *0*.

## Пример
Условие: верно, если длина строки больше или равна значению **"minLength"**.

```js
const isValid = ajv.compile({
    "type": "string",
    "minLength": 2
})
```

```js
isValid("АБ") // true
```

```js
isValid("А") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.3.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.3.2)
- [Understanding JSON Schema, Length](https://json-schema.org/understanding-json-schema/reference/string.html#length)
