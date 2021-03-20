# anyOf
Значение ДОЛЖНО быть массивом, содержащим не меньше одного элемента. Каждый элемент ДОЛЖЕН быть схемой.

## Пример
Условие: верно, если соответствует любой подсхеме **"anyOf"**.

```js
const isValid = ajv.compile({
    "anyOf": [
        { "format": "email" },
        { "pattern": "(\+7|8)[0-9]{10}" }
    ]
})
```

```js
isValid("ivan.ivanov@email.com") // true
```

```js
isValid("+74951234567") // true
```

```js
isValid("неверный контакт") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.7.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.7.2)
- [Understanding JSON Schema, anyOf](https://json-schema.org/understanding-json-schema/reference/combining.html#anyof)
