# definitions
Значение ДОЛЖНО быть объектом. Каждое свойство этого объекта ДОЛЖНО быть схемой.

Это ключевое слово выполняет роль хранилища подсхем, для их последующего использования в общей схеме.

```json
{
   "type": "array",
   "items": { "$ref": "#/definitions/positiveInteger" },
   "definitions": {
       "positiveInteger": {
           "type": "integer",
           "minimum": 0,
           "exclusiveMinimum": true
       }
   }
}
```

#### Ссылки
- [JSON Schema Validation, draft 07, section 9](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.9)
- [Understanding JSON Schema, Reuse](https://json-schema.org/understanding-json-schema/structuring.html#reuse)
