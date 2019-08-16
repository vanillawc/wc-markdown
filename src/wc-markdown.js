import Prism from '../node_modules/prism-es6/prism.js';
import '../node_modules/marked/lib/marked.js';

export class WCMarkdown extends HTMLElement {

  constructor() {
    super();
  };

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src() { return this.getAttribute('src'); }
  set src(value) {
    this.setAttribute('src', value);
    this.fetch(value);
  }

  async connectedCallback() {
    this.style.display = 'block';
    if (this.hasAttribute('src')) {
      const src = this.getAttribute('src');
      let contents = fetch(src)
        .then((response) => response.text())
        .then((contents) => this.parse(contents));

    } else {
      let contents = this.innerHTML;
      this.parse(contents);
    }
  }

  fetch(src) {
    let contents = fetch(src)
      .then((response) => response.text())
      .then((contents) => this.parse(contents));

  }

  parse(contents) {
    // transform the contents into HTML
    contents = this.prepare(contents);
    contents = this.toHtml(contents);
    this.innerHTML = contents;

    // syntax highlight
    if (this.hasAttribute('highlight')) {
      this.syntaxHighlight();
    }
  }

  prepare(rawMarkdown) {
    return rawMarkdown.split('\n').map((line) => {
      line.trim();
      line = line.replace('&lt;', '<');
      return line.replace('&gt;', '>');
    }).join('\n')
  }

  toHtml(markdown) {
    return marked(markdown);
  }

  syntaxHighlight() {
    Prism.highlightAllUnder(this);
  }

}

customElements.define('wc-markdown', WCMarkdown);

