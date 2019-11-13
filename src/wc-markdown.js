/* eslint no-undef: 0 */
import Prism from '../node_modules/prism-es6/prism.js';
import '../node_modules/marked/lib/marked.js';

export class WCMarkdown extends HTMLElement {
  constructor () {
    super();
    this.__value = '';
  }

  static get observedAttributes () {
    return ['src'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src () { return this.getAttribute('src'); }
  set src (value) {
    this.setAttribute('src', value);
    this.fetch(value);
  }

  get value () { return this.__value; }
  set value (value) {
    this.__value = value;
    this.parse();
  }

  async connectedCallback () {
    this.style.display = 'block';
    if (this.hasAttribute('src')) {
      this.fetch(this.src);
    } else {
      this.value = this.innerHTML;
    }
  }

  async fetch (src) {
    // fetch the external markdown source
    const response = await fetch(src);
    this.value = await response.text();
  }

  parse () {
    // transform the contents into HTML
    let contents = this.value;
    contents = this.prepare(contents);
    contents = this.toHtml(contents);
    this.innerHTML = contents;

    // syntax highlight
    if (this.hasAttribute('highlight')) {
      this.syntaxHighlight();
    }
  }

  prepare (rawMarkdown) {
    return rawMarkdown.split('\n').map((line) => {
      line.trim();
      line = line.replace('&lt;', '<');
      return line.replace('&gt;', '>');
    }).join('\n');
  }

  toHtml (markdown) {
    return marked(markdown);
  }

  syntaxHighlight () {
    Prism.highlightAllUnder(this);
  }
}

customElements.define('wc-markdown', WCMarkdown);
