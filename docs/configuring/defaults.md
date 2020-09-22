---
sort: 2
---

# Default configuration

```yml
lang: en
```

```tip
By default Html is compressed and use Jsdelivr CDN, Add following configuration to disable this
```

```yml
debug:
  compress: false
```

## Configuration from GitHub Pages

Some [configuration settings](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll) cannot be changed for GitHub Pages sites.

```yml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

## Configuration from plugins

GitHub Pages uses plugins that are enabled by default and cannot be disabled:

```
jekyll-coffeescript
jekyll-default-layout
jekyll-gist
jekyll-github-metadata
jekyll-optional-front-matter
jekyll-paginate
jekyll-readme-index
jekyll-titles-from-headings
jekyll-relative-links
```

### [jekyll-github-metadata](https://github.com/jekyll/github-metadata#what-it-does)

- Propagates the `site.github` namespace with repository metadata
- Sets `site.title` as the repository name, if none is set
- Sets `site.description` as the repository tagline if none is set
- Sets `site.url` as the GitHub Pages domain (cname or user domain), if none is set
- Sets `site.baseurl` as the project name for project pages if none is set

```danger
If it is not hosted on github, this plugin will become very bad, it is a good choice to close it! (`github_metadata: false`), When you set the value false, the options `github`、`edit`、`addons_branch`、`nav_version` and `commit` information will no longer be available!
```

```tip
Maybe it is the best practice to set the github api site to the local host on your computer
```
