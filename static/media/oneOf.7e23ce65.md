# oneOf
Значение ДОЛЖНО быть массивом, содержащим не меньше одного элемента. Каждый элемент ДОЛЖЕН быть схемой.

Условие: верно, если соответствуют только одной схеме **"oneOf"**.

> При использовании виджетов *"select"*, *"input-autocomplete"* и других, которые предполагают выбор одного значения из списка используйте ключевое слово **"anyOf"** для лучшей производительности, поскольку **"oneOf"** проверяет все значения списка, а **"anyOf"** останавливает проверку после первого найденного соответствия.

#### Ссылки
- [JSON Schema Validation, draft 07, section 6.7.3](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.7.3)
- [Understanding JSON Schema, oneOf](https://json-schema.org/understanding-json-schema/reference/combining.html#oneof)
