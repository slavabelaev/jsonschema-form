# additionalProperties
Значение ДОЛЖНО быть либо логическим, либо схемой.

Если отсутствует, рассматривается как пустая схема.

## Дополнительные свойства не разрешены
Условие: верно, если значение **"additionalProperties"** равно *"false"* и объект не содержит дополнительные свойства, которые не описаны в **"properties"** и/или **"patternProperties"**.

```js
const isValid = ajv.compile({
  "type": "object",
  "properties": {
    "postCode": {
      "type": "number"
    },
    "streetName": {
      "type": "string"
    },
    "streetType": {
      "enum": [
        "Улица",
        "Бульвар"
      ]
    }
  },
  "additionalProperties": false
});
```

```js
isValid({
    "postCode": 143350,
    "streetType": "Улица",
    "streetName": "Ленина"
}) // true
```

```js
isValid({
    "postCode": 143350,
    "streetType": "Улица",
    "streetName": "Ленина",
    "streetNumber": 1
}) // false
```


## Схема дополнительных свойств
Условие: верно, если значение **"additionalProperties"** является схемой и свойства не описанные в **"properties"** и/или **"patternProperties"** ей соответствуют.
```js
const isValid = ajv.compile({
  "type": "object",
  "additionalProperties": {
      "type": "string"
  }
});
```

```js
isValid({
    "postCode": "143350",
    "streetType": "Улица",
    "streetName": "Ленина"
}) // true
```

```js
isValid({
    "postCode": 143350,
    "streetType": "Улица",
    "streetName": "Ленина"
}) // false
```


## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.6](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.6)
- [Understanding JSON Schema, Properties](https://json-schema.org/understanding-json-schema/reference/object.html#properties)
