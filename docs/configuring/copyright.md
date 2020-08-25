---
sort: 9
---

# Set up site copyright
```yml
author: [site.github.owner_name]

copyright:
  since: false # like: 2000
  revision: false # is show the revision
```

## Format
```
Copyright [since]-{{ site.time | date: "%Y" }}, [author] Revision [commit]
```

## Custom
```yml
copyright: Hello friends, I am customized, I support html!
```
