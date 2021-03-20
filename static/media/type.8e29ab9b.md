# type
Значение ДОЛЖНО быть строкой или массивом уникальных строк.

Строковые значения ДОЛЖНЫ быть одним из семи примитивных типов, определенных спецификацией, а именно *"string"*, *"number"*, *"integer"*, *"object"*, *"array"*, *"boolean"*, *"null"*.

## string
Условие: верно, если соответствует типу **"string"**.

```js
const isValid = ajv.compile({ "type": "string" })
```

```js
isValid("АБ") // true
```

```js
isValid(false) // false
```

## number | integer
Условие: верно, если соответствует типу **"number"** | **"integer"**.

```js
const isValid = ajv.compile({ "type": "number" })
```

```js
isValid(99) // true
```

```js
isValid("АБ") // false
```

## boolean
Условие: верно, если соответствует типу **"boolean"**.

```js
const isValid = ajv.compile({ "type": "boolean" })
```

```js
isValid(true) // true
```

```js
isValid("false") // false
```

## null
Условие: верно, если соответствует типу **"null"**.

```js
const isValid = ajv.compile({ "type": "null" })
```

```js
isValid(null) // true
```

```js
isValid("not null") // false
```

## array
Условие: верно, если соответствует типу **"array"**.

```js
const isValid = ajv.compile({ "type": "array" })
```

```js
isValid([false, 0, "1"]) // true
```

```js
isValid({}) // false
```

## object
Условие: верно, если соответствует типу **"object"**.

```js
const isValid = ajv.compile({ "type": "object" })
```

```js
isValid({ "a": "1" }) // true
```

```js
isValid("invalid") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 6.1.1](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.6.1.1)
- [Understanding JSON Schema, Type-specific keywords](https://json-schema.org/understanding-json-schema/reference/type.html)
