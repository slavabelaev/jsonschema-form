# minProperties
Значение ДОЛЖНО быть целым числом, больше или равным *0*.

Если отсутствует, рассматривается как равное *0*.

## Пример
Условие: верно, если количество свойств объекта больше или равно значению **"minProperties"**.

```js
const isValid = ajv.compile({
    "type": "object",
    "minProperties": 2
})
```

```js
isValid({ "a": 0, "b": 1 }) // true
```

```js
isValid({ "a": 0, "b": 1, "c": 2 }) // true
```

```js
isValid({}) // false
```

```js
isValid({ "a": 0 }) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.2)
- [Understanding JSON Schema, Size](https://json-schema.org/understanding-json-schema/reference/object.html#size)
