# required
Значение ДОЛЖНО быть массивом. Этот массив ДОЛЖЕН иметь хотя бы один элемент. Все элементы массива ДОЛЖНЫ быть уникальными строками.

## Пример
Условие: верно, если объект содержит все свойства значения **"required"**.

```js
const isValid = ajv.compile({
    "type": "object",
    "properties": {
        "name":      { "type": "string" },
        "email":     { "type": "string" },
        "address":   { "type": "string" },
        "phone":     { "type": "string" }
    },
    "required": ["name", "email"]
})
```

```js
isValid({
    "name": "Иван Иванов",
    "email": "ivan.ivanov@email.com"
}) // true
```

```js
isValid({
    "name": "Иван Иванов",
    "email": "ivan.ivanov@email.com",
    "address": "Москва, ул. Ленина, д. 1, кв. 1",
    "telegram": "@ivan.ivanov"
}) // true
```

```js
isValid({
    "name": "Иван Иванов",
    "address": "Москва, ул. Ленина, д. 1, кв. 1",
}) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.3)
- [Understanding JSON Schema, Required Properties](https://json-schema.org/understanding-json-schema/reference/object.html#required-properties)
