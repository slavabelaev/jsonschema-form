# $comment
Значение ДОЛЖНО быть строкой.

Это ключевое слово предназначено для хранения дополнительной информации к источнику схемы.

## Пример

```json
{
  "title": "Номер карты Visa",
  "pattern": "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$",
  "$comment": "Источник: https://www.regular-expressions.info/creditcard.html"
}
```

## Ссылки
- [JSON Schema core, draft 07, section 9](https://json-schema.org/draft-07/json-schema-core.html#rfc.section.9)
- [Understanding JSON Schema, Comments](https://json-schema.org/understanding-json-schema/reference/generic.html#comments)
