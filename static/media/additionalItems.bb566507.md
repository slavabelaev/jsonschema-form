# additionalItems
Значение ДОЛЖНО быть либо логическим, либо схемой.

Условие:
- верно, если **"additionalItems"** равен *"true"*;
- верно, если **"additionalItems"** равен *"false"* и количество элементов массива меньше или равно количеству схем в **"items"**;
- верно, если **"additionalItems"** является схемой и дополнительные элементы массива ей соответствуют.

Если отсутствует, рассматривается как пустая схема.

#### Ссылки
- [JSON Schema Validation, draft 07, section 6.4.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.2)
- [Understanding JSON Schema, Items](https://json-schema.org/understanding-json-schema/reference/array.html#items)
