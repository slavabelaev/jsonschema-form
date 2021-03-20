# properties

Значение ДОЛЖНО быть объектом. Каждое свойство этого объекта ДОЛЖНО быть схемой.

Если отсутствует, рассматривается как пустой объект.

## Пример

```js
const isValid = ajv.compile({
    "type": "object",
    "properties": {
        "postCode":   { "type": "number" },
        "streetName": { "type": "string" },
        "streetType": { "enum": ["улица", "бульвар"] }
    }
})
```

```js
isValid({
    "postCode": 103132, 
    "streetName": "Ильинка", 
    "streetType": "улица"
}) // true
```

```js
isValid({
    "postCode": 103132, 
    "streetName": "Ильинка"
}) // true
```

```js
isValid({}) // true
```

```js
isValid({
    "postCode": 103132, 
    "streetName": "Ильинка", 
    "streetType": "улица",
    "administrativeDistrict": "Центральный административный округ"
}) // true
```

```js
isValid({
    "postCode": "Ильинка", 
    "streetName": "Ильинка", 
    "streetType": "улица"
}) // false
```

## Ссылки

- [JSON Schema Validation, draft 07, section 6.5.4](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.4)
- [Understanding JSON Schema, Properties](https://json-schema.org/understanding-json-schema/reference/object.html#properties)
