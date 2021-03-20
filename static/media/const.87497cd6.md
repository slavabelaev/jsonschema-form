# const
Значение МОЖЕТ быть любого типа, включая *null*.

Использование этого ключевого слова эквивалентно **"enum"** с одним значением.

## Пример
Условие: верно, если эквивалентно значению **"const"**.

```js
const isValid = ajv.compile({
    "const": "Россия"
})
```

```js
isValid("Россия") // true
```

```js
isValid("США") // false
```

```js
isValid("Китай") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section ]()
- [Understanding JSON Schema, Constant values](https://json-schema.org/understanding-json-schema/reference/generic.html#constant-values)
