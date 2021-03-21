# additionalItems
Значение ДОЛЖНО быть либо логическим, либо схемой.

Если отсутствует, рассматривается как пустая схема.

## Дополнительные элементы не разрешены
Условие: верно, если **"additionalItems"** равен *"false"* и количество элементов массива меньше или равно количеству схем в **"items"**.

```js
const isValid = ajv.compile({
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "enum": ["Москва", "Санкт-Петербург", "Калининград"]
    },
    {
      "enum": ["улица", "площадь"]
    },
    {
      "type": "string"
    }
  ],
  "additionalItems": false
})
```

```js
isValid([143350, "Москва", "улица", "Ленина"]) // true
```

```js
isValid([143350, "Москва", "улица", "Ленина", "3/1"]) // false
```

## Схема дополнительных элементов
Условие: верно, если **"additionalItems"** является схемой и дополнительные элементы массива ей соответствуют.
```js
const isValid = ajv.compile({
  "type": "array",
  "additionalItems": {
    "type": "string"
  }
})
```

```js
isValid(["Ленина", "Арбат", "Красная Площадь"]) // true
```

```js
isValid(["Ленина", "Арбат", 143350]) // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.4.2](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.4.2)
- [Understanding JSON Schema, Items](https://json-schema.org/understanding-json-schema/reference/array.html#items)
