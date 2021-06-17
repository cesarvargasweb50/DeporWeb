import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="Administrador.html">
            LOPEZ</a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }

  /**
   * @param {import(
      "../lib/tiposFire.js").User}
      usu */
  async cambiaUsuario(usu) {
    if (usu && usu.email) {
      let html = "";
      const roles =
        await cargaRoles(
          usu.email);
      
      // Checa si es administrador
   
      if (roles.has("Administrador")) {
        html += /* html */
        `<li>
          <a href="Administrador.html">Administrador</a>
         </li>`;
      }
      //checa si es deportista
      if (roles.has("Deportista")) {
         html += /* html */
      `<li>
        <a href="Deportista.html">Deportista</a>
       </li>`;
      }
      
      // Checa si es reclutador

      if (roles.has("Reclutador")) {
         html += /* html */
      `<li>
        <a href="Reclutador.html">Reclutador</a>
       </li>`;
      }
      this.ul.innerHTML += html;
    }
  }
}

customElements.define(
  "mi-nav", MiNav);
