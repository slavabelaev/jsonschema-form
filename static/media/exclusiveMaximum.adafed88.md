# exclusiveMaximum
Значение ДОЛЖНО быть числом верхнего предела.

## Пример
Условие: верно, если число меньше значения **"exclusiveMaximum"**.

```js
const isValid = ajv.compile({
    "type": "number",
    "exclusiveMaximum": 100
})
```

```js
isValid(10) // true
```

```js
isValid(99) // true
```

```js
isValid(100) // false
```

```js
isValid(101) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.2.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.2.3)
- [Understanding JSON Schema, Range](https://json-schema.org/understanding-json-schema/reference/numeric.html#range)
