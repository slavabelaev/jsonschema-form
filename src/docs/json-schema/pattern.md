# pattern
Значение ДОЛЖНО быть строкой. Эта строка ДОЛЖНА быть регулярным выражением по стандарту [ECMA 262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf).

## Пример
Условие: верно, если строка соответствует регулярному выражению.

```js
const isValid = ajv.compile({
    "type": "string",
    "pattern": "^[А-Я]{2}-[0-9]{4}$"
})
```

```js
isValid("БЯ-1234") // true
```

```js
isValid("12-3456") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.3.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.3.3)
- [Understanding JSON Schema, String, Regular Expressions](https://json-schema.org/understanding-json-schema/reference/string.html#regular-expressions)
- [Understanding JSON Schema, Regular Expressions](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html#regular-expressions)
- [Mozilla, Регулярные выражения](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
