---
sort: 12
---

# Custom extra html
```
_includes/extra/head.html
_includes/extra/footer.html
```

## Layout overview
```html
<!DOCTYPE html>
<html>

<head>
    .
    .
    .
    [theme.css]
    +
    [custom scss]
    .
    .
    [jquery.js]
    +
    [extra/head.html]
</head>

<body>
    .
    .
    .
    [extra/footer.html]
    +
    [theme.js]
    [anchor.js]
    [mermaid.js]
    [common.js]
    +
    [custom.js]
    +
    [analytics]
</body>

</html>
```
