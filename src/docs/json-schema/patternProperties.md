# patternProperties
Значение ДОЛЖНО быть объектом. Каждое имя свойства этого объекта ДОЛЖНО быть регулярным выражением по стандарту [ECMA 262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf). Значением каждого свойства ДОЛЖНА быть схема.

Если отсутствует, рассматривается как пустой объект.

## Пример
```js
const isValid = ajv.compile({
    "type": "object",
    "patternProperties": {
        "^[a-z]+?Name$": { 
            "type": "string",
            "minLength": 3
        }
    },
    "additionalProperties": false
})
```

```js
isValid({
    "lastName": "Иванов",
    "firstName": "Иван",
    "middleName": "Иванович"
}) // true
```

```js
isValid({ "fullName": 1970 }) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.5.5](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.5)
- [Understanding JSON Schema, Pattern Properties](https://json-schema.org/understanding-json-schema/reference/object.html#pattern-properties)
