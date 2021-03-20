# examples
Значение ДОЛЖНО быть массивом. На значение элемента массива не накладывается никаких ограничений.

Это ключевое слово представляет примеры значений. РЕКОМЕНДУЕТСЯ, чтобы эти значения были верными.

## Пример
```json
{
  "title" : "ИНН",
  "description" : "Идентификационный номер налогоплательщика",
  "pattern": "^([0-9]{10}|[0-9]{12})$",
  "examples" : [
    "7728168971",
    "781612345678"
  ]
}
```

## Ссылки
- [JSON Schema Validation, draft 07, section 10.4](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.10.4)
- [Understanding JSON Schema, samples](http://json-schema.org/understanding-json-schema/conventions.html#examples)
