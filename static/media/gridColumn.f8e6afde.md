# gridColumn
Для адаптивности формы, используется **CSS Grid Layout**, состоящий из 12 фиксированных столбцов.
```css
display: grid;
grid-template-columns: repeat(12, 1fr);
```
По умолчанию каждый элемент сетки занимает всю ширину каждой новой строки, с 1 – 13 ячейки (12 ячеек).
```css
grid-column: 1 / 13;
```


Можно переопределить расположение каждого элемента с помощью специальных свойств UI-схемы.
```json
{
  "firstName": {
    "ui:gridColumn": "1 / 7",
    "ui:gridRow": "1"
  },
  "lastName": {
    "ui:gridColumn": "7 / 13",
    "ui:gridRow": "2"
  }
}
```

На разных размерах экрана с помощью специального свойства UI-схемы.

```json
{
  "firstName": {
    "ui:gridColumn": {
      "xs": "1 / 13",
      "s": "1 / 7",
      "m": "1 / 7",
      "l": "1 / 5",
      "xl": "1 / 5"
    }
  },
  "lastName": {
    "ui:gridColumn": {
      "xs": "1 / 13",
      "s": "7 / 13",
      "m": "7 / 13",
      "l": "5 / 9",
      "xl": "5 / 9"
    }
  }
}
```

## Breakpoints
Доступные контрольные точки аналогичны **Material Design** Grid Breakpoints для адаптивных макетов.

| Window | Диапазон |
| --- | ----------- |
| xs | 0 – 599      |
| s  | 600 – 1023   |
| m  | 1024 – 1439 |
| l  | 1440 – 1919 |
| xl | 1920 +      |

#### Ссылки
- [CSS Grid Layout, Mozilla](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Grid Layout, W3C](https://www.w3.org/TR/css-grid-1/)
- [Material Design, Breakpoints](https://material.io/design/layout/responsive-layout-grid.html#breakpoints)
