import {
  getAuth
} from "../lib/fabrica.js";
import {
  getString,
} from "../lib/util.js";
import {
  tieneRol
} from "./seguridad.js";
import {
  guardaUsuario,
} from "./usuario.js";
/** @type {HTMLFormElement} */
const forma = document["forma3"];

getAuth().onAuthStateChanged(cambia);

async function cambia(usuario) {
    forma.addEventListener(
      "submit", guarda);
}
    
/** @param {Event} evt */
async function guarda(evt) {
  const formData =
    new FormData(forma);
  const id = "fermoralesweb50@gmail.com";
  await guardaUsuario(evt,
    formData, id);
}
