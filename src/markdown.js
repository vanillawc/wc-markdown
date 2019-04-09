import Prism from '/node_modules/prism-es6/prism.js';
import Showdown from '/node_modules/showdown/dist/showdown.mjs';

export class WCMarkdown extends HTMLElement {

  constructor() {
    super();
    this.style.display = 'block';
  };
  
  async connectedCallback() {
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
    return rawMarkdown.split('\n').map((line) => line.trim()).join('\n')
  }

  toHtml(markdown) {
    return new Showdown.Converter().makeHtml(markdown);
  }

  syntaxHighlight() {
    Prism.highlightAllUnder(this);
  }

}

customElements.define('wc-markdown', WCMarkdown);
