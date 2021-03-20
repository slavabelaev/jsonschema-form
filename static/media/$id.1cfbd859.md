# $id
Значение ДОЛЖНО быть строкой и быть действующим URI.

Это ключевое слово представляет URI схемы, и базовый URI для подсхем.

## Пример

```json
{
  "$id": "http://yourdomain.com/schemas/inn.json",
  "title": "ИНН",
  "pattern": "^([0-9]{10}|[0-9]{12})$"
}
```

## Ссылки
- [JSON Schema core, draft 07, section 8.2](https://json-schema.org/draft-07/json-schema-core.html#rfc.section.8.2)
- [Understanding JSON Schema, The $id property](https://json-schema.org/understanding-json-schema/structuring.html#the-id-property)
