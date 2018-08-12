import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `<your-component>` description.
 * @polymer
 * @customElement
 * @extends {PolymerElement}
 */
class YourComponent extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="your-component.css" include="optional-shared-style" inline>
      <p>Hello World!</p>
    `;
  }

  static get properties() {
    return {};
  }
}

customElements.define('your-component', YourComponent);
