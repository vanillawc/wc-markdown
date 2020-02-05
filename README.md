[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-markdown)](https://github.com/vanillawc/wc-markdown/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-markdown)](https://bundlephobia.com/result?p=@vanillawc/wc-markdown)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-markdown)](https://raw.githubusercontent.com/vanillawc/wc-markdown/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@vanillawc/wc-markdown)
[![Latest Status](https://github.com/vanillawc/wc-markdown/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-markdown/actions)
[![Release Status](https://github.com/vanillawc/wc-markdown/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-markdown/actions)

A Vanilla Web Component to bring native Markdown (w/ syntax highlighting) support to the browser

## Installation

```sh
npm i @vanillawc/wc-markdown
```

Then import the `index.js` file at the root of the package.

-----

## Usage

**Attributes**

- `src` - load an external source file
- `highlight` - when present, syntax highlighting is applied to code

**Properties**

- `value` - get/set the source code

### External Source

```html
<wc-markdown src="sample.md"></wc-markdown>
```

### Inline Source

```html
<wc-markdown>
## Inline Markdown

This some sample markdown.
</wc-markdown>
```
*Note: HTML special chars (ex `<`, `>`) need to be escaped to prevent them from being interpreted as HTML.*

### Syntax Highlighting

To apply syntax highlighting, add the `highlight` attribute.

```html
<wc-markdown src="sample2.md" highlight></wc-markdown>
```

Highlighting requires the import of a CSS theme. Themes can be found under `themes/`.

```html
<link rel="stylesheet" href="/node_modules/@vanillawc/wc-markdown/themes/prism-okaidia.css">
```

### Additional Languages

The PrismJS core only includes the following languages `[html, xml, svg, mathml, css, javascript]`. Additional language modules can be imported from `components/`.

```html
<script src="/node_modules/@vanillawc/wc-markdown/components/prism-typescript.min.js"></script>
```

-----

## Demo

### [WC-Markdown-Demo - WebComponents.dev](https://webcomponents.dev/edit/FxoojbLdYqBJVJj4Tsex?sv=1&pm=1)
