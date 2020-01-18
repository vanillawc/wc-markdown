[![GitHub Releases](https://img.shields.io/github/release/vanillawc/wc-markdown.svg)](https://github.com/vanillawc/wc-markdown/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-markdown/master/LICENSE)
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

### Load an external Markdown file using the `src` attribute

```html
<wc-markdown src="assets/sample.md"></wc-markdown>
```

### Insert the Markdown directly into the body of the element

```html
<wc-markdown>
## Inline Markdown

This some sample markdown.
</wc-markdown>
```
*Note: Since the content is contained within html both the opening `<` and closing `>` brackets need to be properly escaped.*

### Inject Markdown via the 'value' property

```html
<wc-markdown></wc-markdown>
<script>
window.onload = () => {;
  document.querySelector("wc-markdown").value = `
  ## Value Prop Markdown

  This sample is loaded from the \`value\` property of the \`&lt;wc-markdown&gt;\` tag
  `;
};
</script>
```

### Enable syntax highlighting with the `highlight` attribute

```html
<wc-markdown src="assets/sample2.md" highlight></wc-markdown>
```

By default, even with `highlight` enabled the code will appear unstyled. To add style a theme needs to be imported globally. The themes can be found under `dist/themes/`.

```html
<link rel="stylesheet" href="/node_modules/@vanillawc/wc-markdown/dist/themes/prism-okaidia.css">
```

### Enable additional languages

The core of PrismJS included with this WC only supports the following languages `[ html, xml, svg, mathml, css, javascript ]`. Support for additional languages can be found in `dist/components/`.

```html
<script src="/node_modules/@vanillawc/wc-markdown/dist/components/prism-typescript.min.js"></script>
```

-----

## Demo

### [WC-Markdown-Demo - WebComponents.dev](https://webcomponents.dev/edit/FxoojbLdYqBJVJj4Tsex?sv=1&pm=1)
