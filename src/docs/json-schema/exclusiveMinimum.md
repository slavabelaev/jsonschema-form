# exclusiveMinimum
Значение ДОЛЖНО быть числом нижнего предела.

## Пример
Условие: верно, если число больше значения **"exclusiveMinimum"**.

```js
const isValid = ajv.compile({
    "type": "number",
    "exclusiveMinimum": 100
})
```

```js
isValid(101) // true
```

```js
isValid(999) // true
```

```js
isValid(100) // false
```

```js
isValid(10) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.2.5](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.2.5)
- [Understanding JSON Schema, Range](https://json-schema.org/understanding-json-schema/reference/numeric.html#range)
