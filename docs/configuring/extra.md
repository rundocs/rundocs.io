---
sort: 12
---

# Custom extra html

```
_includes/extra/head.html
_includes/extra/footer.html
```

## Layout overview

```
<!DOCTYPE html>
<html lang="{{ site.lang }}">
    <head>
        {%- include head/metadata.liquid -%}

        {%- include head/title.liquid -%}
        {%- include head/links.liquid -%}

        {%- include head/script.schema.liquid -%}
        {%- include head/script.liquid -%}
        {%- include head/custom.liquid -%}
        {%- include head/script.extension.liquid -%}

        {%- include extra/head.html -%}
    </head>
    <body class="container">
        {%- include class/sidebar-wrap.liquid -%}
        {%- include class/content-wrap.liquid -%}
        {%- include class/addons-wrap.liquid  -%}

        {%- include extra/footer.html -%}
    </body>
</html>
```
