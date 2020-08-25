---
sort: 8
---

# Set up addons

```yml
# set the addons content, the order is avaiable
addons:
  - github
  - i18n # not recommended, but available
  - plugins
  - analytics

# set true will show the addons with blank content
addons: true


# custom github list items, the order is avaiable
addons:
  - github:
    - homepage
    - issues
    - download

addons_branch: true # show github pages source branch
```

```tip
addons means the footer of sidebar, default is `false`
```

## i18n
Not recommended, but available, because the nested toctree will slow down the build time of your site.
