# Code Style - CSS

## Последовательность свойств

```css
.selector {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box model (sizes and paddings) */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 40px;
  padding: 20px;

  /* Text */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #ffffff;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  /* Decoration (visualisation) */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 1;

  /* Transitions, animation */
  transition: all 1s;
  animation: anime 1s infinite;

  /* Other */
  will-change: auto;
}
```



## Порядок атрибутов
- class
- id, name
- data-\*
- src, for, type, href, value
- title, alt
- role, aria-...



## Многостройный комментарий

```css
/**
 * Text start
 *
 *
 *
 * Text end
 */
```
