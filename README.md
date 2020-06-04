Helper function to add multiple animate.css classes to an element with Javascript.  
**Supports animate.css 3.x and 4.x**

## Installation

### With npm
```shell
npm i animatecss-helper --save
```
and
```javascript
import animateCSS from "animatecss-helper";
```

### Or via CDN in the browser
```html
<script src="https://cdn.jsdelivr.net/npm/animatecss-helper@1.1.0/dist/animatecss-helper.min.js"></script>
```

### Usage
```js
animateCSS(selector, classes, () => {
    // callback after animation ends
})
```

### Examples 
For v3
```js
animateCSS('#id', 'fadeOut slow', () => {
    // callback after animation ends
})
```

For v4  
```js
animateCSS('#id', 'animate__fadeOut animate__slow', () => {
    // callback after animation ends
})
```

### Build
Gulp is used to build the output  
```npm run build```