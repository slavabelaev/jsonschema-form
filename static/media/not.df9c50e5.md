# not
Значение ДОЛЖНО быть схемой.

## Пример
Условие: верно, если не соответствует подсхеме **"not"**.

```js
const isValid = ajv.compile({ 
    "not": { "type": "string" } 
})
```

```js
isValid(42) // true
```

```js
isValid({ "key": "value" }) // true
```

```js
isValid("I am a string") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.7.4](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.7.4)
- [Understanding JSON Schema, not](https://json-schema.org/understanding-json-schema/reference/combining.html#not)
