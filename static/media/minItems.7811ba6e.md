# minItems
Значение ДОЛЖНО быть целым числом, больше или равным *0*.

Если отсутствует, рассматривается как равное *0*.

## Пример
Условие: верно, если количество элементов массива больше или равно значению **"minItems"**.

```js
const isValid = ajv.compile({
    "type": "array",
    "minItems": 2
})
```

```js
isValid([1, 2]) // true
```

```js
isValid([1, 2, 3]) // true
```

```js
isValid([]) // false
```

```js
isValid([1]) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.4.4](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.4)
- [Understanding JSON Schema, Length](https://json-schema.org/understanding-json-schema/reference/array.html#length)
