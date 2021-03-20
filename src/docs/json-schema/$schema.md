# $schema
Значение ДОЛЖНО быть строкой и быть действующим URI (содержащим схему).

Это ключевое слово ДОЛЖНО использоваться исключительно в корневой схеме. НЕ ДОЛЖНО появляются в подсхемах.

Используется как указатель версии JSON-схемы и указывает на ресурс ее расположения.

## Пример
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

## Ссылки
- [JSON Schema core, draft 07, section 7](https://json-schema.org/draft-07/json-schema-core.html#rfc.section.7)
- [Understanding JSON Schema, The $schema keyword](https://json-schema.org/understanding-json-schema/reference/schema.html)
