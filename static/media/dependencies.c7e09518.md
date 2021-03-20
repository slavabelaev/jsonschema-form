# dependencies
Это ключевое слово определяет правила, которые проверяются, если объект содержит определенное свойство.

Значение ДОЛЖНО быть объектом. Каждое свойство определяет зависимость. Значение каждой зависимости ДОЛЖНО быть либо схемой, либо массивом.

## Список зависимостей 
Условие: верно, если 
- значение зависимости является массивом;
- массив содержит хотя бы один элемент;
- все элементы массива уникальны;
- каждый элемент является именем существующего свойства объекта.

```js
const isValid = ajv.compile({
    "type": "object",

    "properties": {
        "embossedName": { "type": "string" },
        "cardNumber": { "type": "string" },
        "expirationDate": { "type": "string" }
    },

    "required": ["embossedName"],

    "dependencies": {
        "cardNumber": ["expirationDate"]
    }
})
```

```js
isValid({
    "embossedName": "IVAN IVANOV",
    "cardNumber": "4501234567890123",
    "expirationDate": "12/25"
}) // true
```


```js
isValid({
    "embossedName": "IVAN IVANOV"
}) // true
```


```js
isValid({
    "embossedName": "IVAN IVANOV",
    "expirationDate": "12/25"
}) // true
```

```js
isValid({
    "embossedName": "IVAN IVANOV",
    "cardNumber": "4501234567890123"
}) // false
```

## Схема зависимостей
Условие: верно, если 
- значение зависимости является схемой;
- объект соответствует схеме.

```js
const isValid = ajv.compile({
    "type": "object",

    "properties": {
        "embossedName": { "type": "string" },
        "cardNumber": { "type": "string" }
    },

    "required": ["embossedName"],

    "dependencies": {
        "cardNumber": {
            "properties": {
                "expirationDate": { "type": "string" }
            },
            "required": ["expirationDate"]
        }
    }
})
```

```js
isValid({
    "embossedName": "IVAN IVANOV",
    "cardNumber": "4501234567890123",
    "expirationDate": "12/25"
}) // true
```

```js
isValid({
    "embossedName": "IVAN IVANOV",
    "expirationDate": "12/25"
}) // true
```

```js
isValid({
    "embossedName": "IVAN IVANOV",
    "cardNumber": "4501234567890123"
}) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.7](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.7)
- [Understanding JSON Schema, Dependencies](https://json-schema.org/understanding-json-schema/reference/object.html#dependencies)
