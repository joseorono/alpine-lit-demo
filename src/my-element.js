import { LitElement, css, html } from "lit";

import { property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  // Define a reactive property
  static properties = {
    name: { type: String },
  };

  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.docsHint = "Click on the Vite and Lit logos to learn more";
    this.count = 0;
  }

  render() {
    return html`
      <div class="bg-red-600">Red background</div>
      <div class="p-7" x-data="{ count: 0 }">
        <button class="btn btn-primary" @click="count++">
          Increment With Alpine Inside Lit
        </button>
        <span x-text="count" class="p-3 border-1 block"></span>
      </div>
      <div class="max-w-md mx-auto space-y-4 ">
        <h1 class="text-3xl font-bold text-center text-primary">
          Tailwind + DaisyUI Demo
        </h1>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Hello, Components!</h2>
            <p>This is a sample card using DaisyUI components.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Click Me</button>
            </div>
          </div>
        </div>

        <div class="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current shrink-0 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>This is an informational alert!</span>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Pick a flavor</span>
          </label>
          <select class="select select-bordered">
            <option disabled selected>Choose one</option>
            <option>Vanilla</option>
            <option>Chocolate</option>
            <option>Strawberry</option>
          </select>
        </div>
      </div>
      <div>
        <slot></slot>
        <div class="card">
          <button @click=${this._onClick} part="button">
            count is ${this.count}
          </button>
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
      </div>
      <div>Hello, ${this.name}!</div>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define("my-element", MyElement);
