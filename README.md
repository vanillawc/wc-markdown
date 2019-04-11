<h1><img width="90" src="assets/wc-markdown-readme-icon.png"> WC-Markdown</h1>

[![npm](https://badgen.net/npm/v/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![downloads](https://badgen.net/npm/dt/@vanillawc/wc-markdown)](https://www.npmjs.com/package/@vanillawc/wc-markdown)
[![CircleCI](https://circleci.com/gh/vanillawc/wc-markdown.svg?style=shield)](https://circleci.com/gh/vanillawc/wc-markdown)
[![Known Vulnerabilities](https://snyk.io/test/npm/@vanillawc/wc-markdown/badge.svg)](https://snyk.io/test/npm/@vanillawc/wc-markdown)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evanplaice/jquery-csv/master/LICENSE)

A Vanilla Web Component to bring native Markdown (w/ syntax highlighting) support to the browser

 <!-- TODO: Add video graphic here -->

-----

## Installation

```sh
npm i @vanillawc/wc-markdown
```

This will create the `wc-markdown` folder in `node_modules`.

*Note: To reduce bloat, the dependencies for this project are marked as `peerDependencies`. It is NOT necessary to install these if you're importing from the `dist/` directory.*

-----

## Usage

### Load an external Markdown file with the `src` attribute

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