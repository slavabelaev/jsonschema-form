# $ref
Значение ДОЛЖНО быть строкой и быть действующим URI.

Это ключевое слово является ссылкой на схему, по правилам которой будет выполняться проверка.

## Ссылка на определение

```js
const isValid = ajv.compile({
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
        "address": {
            "type": "object",
            "properties": {
                "streetAddress": { "type": "string" },
                "city":          { "type": "string" },
                "state":         { "type": "string" }
            },
            "required": ["streetAddress", "city"]
        }
    },

    "type": "object",

    "properties": {
        "registrationAddress": { "$ref": "#/definitions/address" },
        "livingAddress": { "$ref": "#/definitions/address" }
    }
})
```

```js
isValid({
    "registrationAddress": {
        "streetAddress": "ул. Абаканская, д. 1, кв. 1",
        "city": "Уфа",
        "state": "Республика Башкортостан"
    },
    "livingAddress": {
        "streetAddress": "ул. Ленина, д. 1, кв. 1",
        "city": "Москва"
    }
}) // true
```

## Ссылка на рекурсивную схему

```js
const isValid = ajv.compile({
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
        "person": {
            "type": "object",
            "properties": {
                "name": { "type": "string" },
                "children": {
                    "type": "array",
                    "items": { "$ref": "#/definitions/person" },
                    "default": []
                }
            }
        }
    },

    "type": "object",

    "properties": {
        "person": { "$ref": "#/definitions/person" }
    }
})
```

```js
isValid({
    "person": {
        "name": "Александра",
        "children": [
            {
                "name": "Дмитрий",
                "children": [
                    {
                        "name": "Иван",
                        "children": [
                            { "name": "Георгий" },
                            { "name": "Елизавета" }
                        ]
                    },
                    {
                        "name": "Степан"
                    }
                ]
            }
        ]
    }
}) // true
```

## Ссылки
- [JSON Schema core, draft 07, section 8.3](https://json-schema.org/draft-07/json-schema-core.html#rfc.section.8.3)
- [Understanding JSON Schema, Using $id with $ref](https://json-schema.org/understanding-json-schema/structuring.html#using-id-with-ref)
