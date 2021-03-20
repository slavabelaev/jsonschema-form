# maxProperties
Значение ДОЛЖНО быть целым числом, больше или равным *0*.

## Пример
Условие: верно, если количество свойств объекта меньше или равно значению **"maxProperties"**.

```js
const isValid = ajv.compile({
    "type": "object",
    "maxProperties": 3
})
```

```js
isValid({}) // true
```

```js
isValid({ "a": 0, "b": 1, "c": 2 }) // true
```

```js
isValid({ "a": 0, "b": 1, "c": 2, "d": 3 }) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.1)
- [Understanding JSON Schema, Size](https://json-schema.org/understanding-json-schema/reference/object.html#size)
