# format
Применяется для проверки строки.

> JavaScript-валидатор (Ajv) поддерживает только [следующие форматы](https://github.com/ajv-validator/ajv-formats):
> *date*, *time*, *date-time*, *duration*, *uri*, *uri-reference*, *uri-template*, *email*, *hostname*, *ipv4*, *ipv6*, *regex*, *uuid*, *json-pointer*, *relative-json-pointer*,

## *date-time*
Условие: верно, если строка является датой и временем, согласно [RFC 3339, раздел 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) [[RFC3339]](https://tools.ietf.org/html/rfc3339).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "date-time"
})
```

```js
isValid("2020-12-31T12:30:00.000Z") // true
```

```js
isValid("31.12.2020 12:30:00") // false
```

## *date*
Условие: верно, если строка является датой, согласно [RFC 3339, раздел 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) [[RFC3339]](https://tools.ietf.org/html/rfc3339).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "date"
})
```

```js
isValid("2020-12-31") // true
```

```js
isValid("31.12.2020") // false
```

## *time*
Условие: верно, если строка является временем, согласно [RFC 3339, раздел 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) [[RFC3339]](https://tools.ietf.org/html/rfc3339).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "time"
})
```

```js
isValid("23:59:00") // true
```

```js
isValid("25:61:00") // false
```

## *duration*
Условие: верно, если строка является продолжительностью, согласно [RFC 3339, раздел 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) [[RFC3339]](https://tools.ietf.org/html/rfc3339).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "duration"
})
```

```js
isValid() // true
```

```js
isValid() // false
```

## *email*
Условие: верно, если строка является электронной почтой, согласно [RFC 5322, раздел 3.4.1](https://tools.ietf.org/html/rfc5322#section-3.4.1) [[RFC5322]](https://tools.ietf.org/html/rfc5322).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "email"
})
```

```js
isValid("username@example.com") // true
```

```js
isValid("username@example.") // false
```

## *idn-email*
Условие: верно, если строка является международной электронной почтой, согласно [[RFC6531]](https://tools.ietf.org/html/rfc6531).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "idn-email"
})
```

```js
isValid("ivan@example.com") // true
```

```js
isValid("1234") // false
```

## *hostname*
Условие: верно, если строка является именем хоста в Интернете, согласно [RFC 1034, раздел 3.1](https://tools.ietf.org/html/rfc1034#section-3.1) [[RFC1034]](https://tools.ietf.org/html/rfc1034).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "hostname"
})
```

```js
isValid("example.com") // true
```

```js
isValid("http://example.com") // false
```

## *idn-hostname*
Условие: верно, если строка является международным именем хоста в Интернете, согласно [[RFC5890]](https://tools.ietf.org/html/rfc5890#section-2.3.2.3).

```js
isValid("конституция.рф") // true
```

```js
isValid("_конституция.рф") // false
```

## *ipv4*
Условие: верно, если строка является IPv4-адресом в соответствии с **"dotted-quad"** ABNF синтаксисом, согласно [RFC 2673, раздел 3.2](https://tools.ietf.org/html/rfc2673#section-3.2) [[RFC2673]](https://tools.ietf.org/html/rfc2673).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "idn-hostname"
})
```

```js
isValid("255.255.255.255") // true
```

```js
isValid("256.256.256.256") // false
```

## *ipv6*
Условие: верно, если строка является IPv6-адресом, согласно [RFC 2373, раздел 2.2](https://tools.ietf.org/html/rfc2373#section-2.2) [[RFC2373]](https://tools.ietf.org/html/rfc2373).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "ipv6"
})
```

```js
isValid("2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d") // true
```

```js
isValid("_2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d") // false
```

## *uri*
Условие: верно, если строка является URI, согласно [[RFC3986]](https://tools.ietf.org/html/rfc3986).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "uri"
})
```

```js
isValid("https://example.com") // true
```

```js
isValid("example.com") // false
```

## *uri-reference*
Условие: верно, если строка является ссылкой на URI, согласно [[RFC3986]](https://tools.ietf.org/html/rfc3986#section-4.1).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "uri-reference"
})
```

```js
isValid("aaa/bbb.html") // true
```

```js
isValid("http://a_example.com") // false
```

## *iri*
Условие: верно, если строка является международным URI, согласно [[RFC3987]](https://tools.ietf.org/html/rfc3987).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "iri"
})
```

```js
isValid("http://ƒøø.ßår/?∂éœ=πîx#πîüx") // true
```

```js
isValid("http:// ƒøø.com") // false
```

## *iri-reference*
Условие: верно, если строка является международной ссылкой на URI, согласно [[RFC3987]](https://tools.ietf.org/html/rfc3987).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "iri-reference"
})
```

```js
isValid("aaa/bbb.html") // true
```

```js
isValid("http://_example.com") // false
```

## *uri-template*
Условие: верно, если строка является шаблоном URI, согласно [[RFC6570]](https://tools.ietf.org/html/rfc6570).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "uri-template"
})
```

```js
isValid("http://example.com/path/to/{term:1}/{term}") // true
```

```js
isValid("http://_example.com/path/to/{?q,r}") // false
```

## *json-pointer*
Условие: верно, если строка это JSON Pointer, согласно [[RFC6901]](https://tools.ietf.org/html/rfc6901).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "json-pointer"
})
```

```js
isValid("/path/to/property") // true
```

```js
isValid("#/path/to/property") // false
```

## *relative-json-pointer*
Условие: верно, если строка это относительный JSON Pointer, согласно [Relative JSON Pointers](https://tools.ietf.org/html/draft-handrews-relative-json-pointer-01).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "relative-json-pointer"
})
```

```js
isValid("0/a/b") // true
```

```js
isValid("/a/b") // false
```

## *regex*
Условие: верно, если строка является регулярным выражением, согласно [ECMA 262](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "regex"
})
```

```js
isValid("^[А-Яа-я0-9]$") // true
```

```js
isValid("^[А-Яа-я0-9") // false
```

## *uuid*
Условие: верно, если строка является UUID, согласно [RFC4122](https://tools.ietf.org/html/rfc4122).

```js
const isValid = ajv.compile({
    "type": "string",
    "format": "uuid"
})
```

```js
isValid("fcc18103-f6c4-4852-b332-89384556a9f4") // true
```

```js
isValid("fcc18103-f6c4-4852-b332-89384556a9f4_") // false
```

## Ссылки
- [JSON Schema Validation, draft 07, section 7](https://json-schema.org/draft-07/json-schema-validation.html#rfc.section.7)
- [Understanding JSON Schema, Format](https://json-schema.org/understanding-json-schema/reference/string.html#format)
