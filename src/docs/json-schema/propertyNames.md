# propertyNames
Значение ДОЛЖНО быть схемой.

## Пример
Условие: верно, если имена свойств объекта соответствуют схеме.

```js
const isValid = ajv.compile({
    "type": "object",
    "propertyNames": {
        "pattern": "^user_[0-9]+$"
    }
})
```

```js
isValid({
    "user_1": {},
    "user_999": {}
}) // true
```

```js
isValid({
    "invalid_key": {}
}) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.8](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.8)
- [Understanding JSON Schema, Property names](https://json-schema.org/understanding-json-schema/reference/object.html#property-names)
