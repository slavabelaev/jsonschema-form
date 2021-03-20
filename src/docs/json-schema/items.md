# items
Значение ДОЛЖНО быть схемой или массивом схем.

Если отсутствует, рассматривается как пустая схема.

### Общая схема для всех элементов
Условие: верно, если значение **"items"** является схемой и все элементы массива ей соответствуют.

```js
const isValid = ajv.compile({
  "type": "array",
  "items": {
    "type": "number"
  }
})
```

```js
isValid([1, 2, 3, 4, 5]) // true
```
```js
isValid([]) // true
```

```js
isValid([1, 2, "3", 4, 5]) // false
```

### Персональная схема для каждого элемента
Условие: верно, если значение **"items"** является массивом схем и каждый элемент массива соответствует собственной схеме.

```js
const isValid = ajv.compile({
    "type": "array",
    "items": [
        {
            "type": "number",
            minLength: 6,
            maxLength: 6
        },
        {
            "type": "string",
            "enum": ["улица", "площадь"]
        },
        {
            "type": "string"
        },
        {
            "type": "string"
        }
    ]
})
```

```js
isValid([143350, "улица", "Ленина", "1/1"]) // true
```

```js
isValid([109012, "площадь", "Красная площадь"]) // true
```

```js
isValid([24, "бульвар", "Волжский Бульвар"]) // false
```

```js
isValid(["ул. Арбат"]) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.4.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.1)
- [Understanding JSON Schema, Items](https://json-schema.org/understanding-json-schema/reference/array.html#items)
