# maxItems
Значение ДОЛЖНО быть целым числом, больше или равным *0*.

## Пример
Условие: верно, если количество элементов массива меньше или равно значению **"maxItems"**.

```js
const isValid = ajv.compile({
    "type": "array",
    "maxItems": 3
})
```

```js
isValid([]) // true
```

```js
isValid([1, 2, 3]) // true
```

```js
isValid([1, 2, 3, 4]) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.4.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.3)
- [Understanding JSON Schema, Length](https://json-schema.org/understanding-json-schema/reference/array.html#length)
