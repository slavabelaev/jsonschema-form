# uniqueItems
Значение ДОЛЖНО быть логическим.

## Пример
Условие: верно, если все элементы массива уникальны.

```js
const isValid = ajv.compile({
    "type": "array",
    "uniqueItems": true
})
```

```js
isValid([]) // true
```

```js
isValid([1, 2, 3, 4, 5]) // true
```

```js
isValid([1, 2, 3, 3, 4]) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.4.5](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.5)
- [Understanding JSON Schema, uniqueness](http://json-schema.org/understanding-json-schema/reference/array.html#uniqueness)
