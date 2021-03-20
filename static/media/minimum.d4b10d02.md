# minimum
Значение ДОЛЖНО быть числом нижнего предела.

## Пример
Условие: верно, если число больше или равно значению **"minimum"**.

```js
const isValid = ajv.compile({
    "type": "number",
    "minimum": 0
})
```

```js
isValid(0) // true
```

```js
isValid(1) // true
```

```js
isValid(-1) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.2.4](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.2.4)
- [Understanding JSON Schema, Range](https://json-schema.org/understanding-json-schema/reference/numeric.html#range)
