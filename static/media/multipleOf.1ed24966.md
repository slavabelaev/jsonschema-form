# multipleOf
Значение ДОЛЖНО быть числом, строго большим чем *0*.

## Пример
Условие: верно, если результат деления на значение **"multipleOf"** — целое число.

```js
const isValid = ajv.compile({
    "type": "number",
    "multipleOf": 10
})
```

```js
isValid(0) // true
```

```js
isValid(10) // true
```

```js
isValid(20) // true
```

```js
isValid(23) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.2.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.2.1)
- [Understanding JSON Schema, Multiples](https://json-schema.org/understanding-json-schema/reference/numeric.html#multiples)
