<h1 align="center">&lt;wc-markdown&gt; Markdown with Syntax Highlighing</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-markdown/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-markdown" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-markdown"><img src="https://badgen.net/npm/v/@vanillawc/wc-markdown" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-markdown"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-markdown" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillawc/wc-markdown/actions"><img src="https://github.com/vanillawc/wc-markdown/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-markdown/actions"><img src="https://github.com/vanillawc/wc-markdown/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/8ur9M5"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
  <a href="https://www.webcomponents.org/element/@vanillawc/wc-markdown"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-markdown
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-markdown/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-markdown@1/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/FxoojbLdYqBJVJj4Tsex?sv=1&pm=1)

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
  <script type="wc-content">
    ## Inline Markdown

    This some sample markdown.
  </script>
</wc-markdown>
```
*Note: The `</script>` word cannot be used inside here, you'll have to use the escaped `&lt;/script&gt;` version instead, you may also use `&lt;script&gt;` for the opening `<script>` tag if you wish to*

### Syntax Highlighting

To apply syntax highlighting, add the `highlight` attribute.

```html
<wc-markdown src="sample2.md" highlight></wc-markdown>
```

### Syntax Highlighting - Theming

Highlighting requires the import of a CSS theme. Themes can be found under `themes/`.

```html
<link rel="stylesheet" href="/node_modules/@vanillawc/wc-markdown/themes/prism-okaidia.css">
```

### Syntax Highlighting - Languages

The PrismJS core includes the following languages `[html, xml, svg, mathml, css, javascript]`.

Additional language modules can be imported from `components/`.

```html
<script type="module" src="/node_modules/@vanillawc/wc-markdown/index.js"></script>
<script type="module" src="/node_modules/@vanillawc/wc-markdown/components/prism-typescript.js"></script>
```

Some languages extend others. Ex, `C++` extends `C` so both need to be imported in the correct order.

```html
<script type="module" src="/node_modules/@vanillawc/wc-markdown/index.js"></script>
<script type="module" src="/node_modules/@vanillawc/wc-markdown/components/prism-c.js"></script>
<script type="module" src="/node_modules/@vanillawc/wc-markdown/components/prism-cpp.js"></script>
```

## Contributing

See [CONTRIBUTING.md](https://github.com/vanillawc/vanillawc/blob/main/CONTRIBUTING.md)
