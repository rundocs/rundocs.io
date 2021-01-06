---
sort: 11
---

# Custom SCSS or JavaScript

Via file:
```
_includes/assets/custom.js
_includes/assets/custom.scss
```

Via `_config.yml`:
```js
javascript: |
  alert("it");
  alert("works!");
```
```scss
scss: |
  .wy-nav-content-wrap{background:#fcfcfc}
  .wy-nav-content-wrap .wy-nav-content{max-width:none}
```

```tip
Please do not use double slashes in JavaScript, and be sure to add the semicolon(;) at the end!
```
