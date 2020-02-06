/* eslint no-undef: 0 */
import Prism from '../node_modules/prism-es6/prism.js';
import '../node_modules/marked/lib/marked.js';

self.Prism = Prism;

export class WCMarkdown extends HTMLElement {
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
    this.setSrc(value);
  }

  get value () { return this.__value; }
  set value (value) {
    this.__value = value;
    this.setValue();
  }

  constructor () {
    super();
    this.__value = '';
  }

  async connectedCallback () {
    this.style.display = 'block';

    if (this.innerHTML) {
      this.__value = this.innerHTML;
      this.setValue();
    }
  }

  async setSrc (src) {
    this.__value = await this.fetchSrc(src);
    this.setValue();
  }

  async fetchSrc (src) {
    const response = await fetch(src);
    return response.text();
  }

  setValue () {
    let contents = this.__value;
    contents = WCMarkdown.prepare(contents);
    contents = WCMarkdown.toHtml(contents);
    this.innerHTML = contents;

    if (this.hasAttribute('highlight')) {
      WCMarkdown.highlight(this);
    }
  }

  static prepare (markdown) {
    return markdown.split('\n').map((line) => {
      line.trim();
      line = line.replace('&lt;', '<');
      return line.replace('&gt;', '>');
    }).join('\n');
  }

  static toHtml (markdown) {
    return marked(markdown);
  }

  static highlight (element) {
    Prism.highlightAllUnder(element);
  }
}

customElements.define('wc-markdown', WCMarkdown);
