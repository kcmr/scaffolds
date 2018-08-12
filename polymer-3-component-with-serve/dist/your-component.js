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
      <style include="optional-shared-style">
      :host {
        display: block;
      }

      :host([hidden]),
      [hidden] {
        display: none;
      }

      .class__nested {
        color: blueviolet;
      }

      </style>
      <p class="class__nested">Hello World!</p>
    `;
  }

  static get properties() {
    return {};
  }
}

customElements.define('your-component', YourComponent);
