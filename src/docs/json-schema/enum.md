# enum
Значение ДОЛЖНО быть массивом. Этот массив ДОЛЖЕН содержать хотя бы один элемент. Все элементы массива ДОЛЖНЫ быть уникальными.

Элементы массива МОГУТ быть любого типа, включая *"null"*.

## Пример
Условие: верно, если является одним из элементов массива **"enum"**.

```js
const isValid = ajv.compile({
    "enum": ["красный", "желтый", "зеленый", null, 42]
})
```

```js
isValid("красный") // true
```

```js
isValid(null) // true
```

```js
isValid(42) // true
```

```js
isValid(0) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.1.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.1.2)
- [Understanding JSON Schema, Enumerated values](https://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values)
