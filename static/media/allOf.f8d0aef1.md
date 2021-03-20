# allOf

Значение ДОЛЖНО быть массивом, содержащим не меньше одного элемента. Каждый элемент ДОЛЖЕН быть схемой.

## Набор подсхем
Условие: верно, если соответствует всем подсхемам **"allOf"**.

```js
const isValid = ajv.compile({
    "allOf": [
        {"pattern": "[А-Я]"},
        {"pattern": "[0-9]"},
        {"minLength": 8},
    ]
})
```

```js
isValid("СЕКРЕТ 12") // true
```

```js
isValid("СЕК") // false
```

## Объединение схем
Пример дополнения схемы из определения дополнительными свойствами.

```js
const isValid = ajv.compile({
    "definitions": {
        "address": {
            "type": "object",
            "properties": {
                "city": {"type": "string"},
                "streetAddress": {"type": "string"}
            },
            "required": ["streetAddress", "city"]
        }
    },

    "allOf": [
        {"$ref": "#/definitions/address"},
        {
            "properties": {
                "type": {"enum": ["living", "registration"]}
            },
            "required": ["type"]
        }
    ]
})
```

```js
isValid({
    "city": "Москва",
    "streetAddress": "ул. Ленина, д. 1, кв. 1",
    "type": "registration"
}) // true
```

## Ссылки

- [JSON Schema Validation, draft 07, section 6.7.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.7.1)
- [Understanding JSON Schema, allOf](https://json-schema.org/understanding-json-schema/reference/combining.html#allof)
