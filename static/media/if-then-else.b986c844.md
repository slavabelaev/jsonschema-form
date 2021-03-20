# if / then / else
Значение для **"if"**, **"then"**, **"else"** ДОЛЖНО быть схемой.

## Пример
Условие: верно, если соответствует подсхемам **"if"** и **"then"**, либо подсхеме **"else"**.

```js
const isValid = ajv.compile({
    "type": "object",
    "properties": {
        "streetAddress": {
            "type": "string"
        },
        "country": {
            "enum": ["Россия", "Молдова"]
        }
    },
    "if": {
        "properties": { "country": { "const": "Россия" } }
    },
    "then": {
        "properties": { "postalCode": { "pattern": "^[0-9]{6}$" } }
    },
    "else": {
        "properties": { "postalCode": { "pattern": "^MD-[0-9]{4}$" } }
    }
})
```

```js
isValid({
    "streetAddress": "Москва, ул. Ленина, д. 1, кв. 1",
    "country": "Россия",
    "postalCode": "143555"
}) // true
```


```js
isValid({
    "streetAddress": "Кишинев, Московский проспект 1 кв. 1",
    "country": "Молдова",
    "postalCode": "MD-2000"
}) // true
```

```js
isValid({
    "streetAddress": "Кишинев, Московский проспект 1 кв. 1",
    "country": "Молдова",
    "postalCode": "143555"
}) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.6.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.6.1)
- [JSON Schema Validation, draft 07, section 6.6.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.6.2)
- [JSON Schema Validation, draft 07, section 6.6.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.6.3)
- [Understanding JSON Schema, Applying subschemas conditionally](https://json-schema.org/understanding-json-schema/reference/conditionals.html)
