# contains
Значение ДОЛЖНО быть схемой.

## Пример
Условие: верно, если массив содержит хотя бы один элемент соответствующий схеме **"contains"**.

```js
const isValid = ajv.compile({
    "type": "array",
    "contains": {
        "type": "number"
    }
})
```

```js
isValid(["данный", "массив", "содержит", "число", 42]) // true
```

```js
isValid([1, 2, 3, 4, 5]) // true
```

```js
isValid(["данный", "массив", "не", "содержит", "число"]) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.4.6](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.6)
- [Understanding JSON Schema, Items](https://json-schema.org/understanding-json-schema/reference/array.html#items)
