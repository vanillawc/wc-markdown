<h1><img width="90" src="assets/wc-markdown-readme-icon.png"> WC-Markdown</h1>

[![GitHub Releases](https://img.shields.io/github/release/vanillawc/wc-markdown.svg)](https://github.com/vanillawc/wc-markdown/releases)
[![NPM](https://badgen.net/npm/v/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![CircleCI](https://circleci.com/gh/vanillawc/wc-markdown.svg?style=shield)](https://circleci.com/gh/vanillawc/wc-markdown)
[![Known Vulnerabilities](https://snyk.io/test/npm/@vanillawc/wc-markdown/badge.svg)](https://snyk.io/test/npm/@vanillawc/wc-markdown)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-markdown/master/LICENSE)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@vanillawc/wc-markdown)

A Vanilla Web Component to bring native Markdown (w/ syntax highlighting) support to the browser

 <!-- TODO: Add video graphic here -->

-----

## Installation

```sh
npm i @vanillawc/wc-markdown
```

This will create the `wc-markdown` folder in `node_modules`.

*Note: To reduce bloat, the external libraries included in this project are marked as `devDependencies`. It is NOT necessary to install these if you're importing from the `dist/` directory.*

-----

## Usage

### Load an external Markdown file using the `src` attribute

```html
<wc-markdown src="assets/sample.md"></wc-markdown>
```

***Demo: [WC-Markdown - 'src'][]***

### Insert the Markdown directly into the body of the element

```html
<wc-markdown>
## Inline Markdown

This some sample markdown.
</wc-markdown>
```
*Note: Since the content is contained within html both the opening `<` and closing `>` brackets need to be properly escaped.*

***Demo: [WC-Markdown - 'innerHTML'][]***

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

***Demo: [WC-Markdown - 'value'][]***

### Enable syntax highlighting with the `highlight` attribute

```html
<wc-markdown src="assets/sample2.md" highlight></wc-markdown>
```

By default, even with `highlight` enabled the code will appear unstyled. To add style a theme needs to be imported globally. The themes can be found under `dist/themes/`.

```html
<link rel="stylesheet" href="/node_modules/@vanillawc/wc-markdown/dist/themes/prism-okaidia.css">
```

***Demo: [WC-Markdown - 'highlight'][]***

### Enable additional languages

The core of PrismJS included with this WC only supports the following languages `[ html, xml, svg, mathml, css, javascript ]`. Support for additional languages can be found in `dist/components/`.

```html
<script src="/node_modules/@vanillawc/wc-markdown/dist/components/prism-typescript.min.js"></script>
```

## Demos

In addition to the links above each of the demos can be run locally with.

```sh
npm run start
```

[WC-Markdown - 'src']: https://vanillawc.github.io/wc-markdown/demos/src-attribute.html
[WC-Markdown - 'value']: https://vanillawc.github.io/wc-markdown/demos/value-prop.html
[WC-Markdown - 'innerHTML']: https://vanillawc.github.io/wc-markdown/demos/inner-html.html
[WC-Markdown - 'highlight']: https://vanillawc.github.io/wc-markdown/demos/highlight-attribute.html
