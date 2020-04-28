Helper function to add multiple animate.css classes to an element.

### Usage
```javascript
import animateCSS from "animatecss-helper";
```

```javascript
animateCSS(selector, classes, () => {
    // callback after animation ends
})
```

**For example**
```javascript
animateCSS('#id', 'fadeOut slow', () => {
    // callback after animation ends
})
```