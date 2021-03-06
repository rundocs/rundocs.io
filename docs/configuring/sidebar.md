---
sort: 4
---

# Set the sidebar

Show `category1` in the toctree, must have a`README.md`:
```
README.md
category1/file1.md
category1/file2.md
category1/file3.md
category1/README.md
```

Do not show `category1` in the toctree:
```
README.md
category1/file1.md
category1/file2.md
category1/file3.md
```

## Sort the sidebar
Default sorted by `path`, If you want to further setting, add following configuration to your `_config.yml`

```yml
readme_index:
  with_frontmatter: true
```

Then add following [Front Matter](https://jekyllrb.com/docs/front-matter/) to markdown files.

    {% raw %}
    ---
    sort: 1 # follow a certain sequence of letters or numbers
    ---
    {% endraw %}

```note
Now the sorted files will have certain order from your input! If you want to turn off the order prefix in toctree, `show_sorted: false`
```
