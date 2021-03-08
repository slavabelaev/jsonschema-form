# additionalProperties
Значение ДОЛЖНО быть либо логическим, либо схемой.

Условие:
- верно, если значение **"additionalProperties"** равно *"true"*;
- верно, если значение **"additionalProperties"** равно *"false"* и объект не содержит дополнительные свойства, которые не описаны в **"properties"** и/или **"patternProperties"**;
- верно, если значение **"additionalProperties"** является схемой и свойства не описанные в **"properties"** и/или **"patternProperties"** ей соответствуют.

Если отсутствует, рассматривается как пустая схема.

#### Ссылки
- [JSON Schema Validation, draft 07, section 6.5.6](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.5.6)
- [Understanding JSON Schema, Properties](https://json-schema.org/understanding-json-schema/reference/object.html#properties)
