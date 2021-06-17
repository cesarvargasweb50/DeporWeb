class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        César Francisco Vargas Salazar
        </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
