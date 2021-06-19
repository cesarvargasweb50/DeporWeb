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
} from "./usuarios.js";
/** @type {HTMLFormElement} */
const forma = document["forma2"];
/** @type {HTMLImageElement} */
const avatar = document.
  querySelector("#avatar");


/** @param {Event} evt */
async function guarda(evt) {
  const formData =
    new FormData(forma);
  alert("The variable named formData has value:  " + formData);
  const id = getString(
    formData, "nombre").trim();
  alert("The variable named formData has value:  " + id);
  await guardaUsuario(evt,
    formData, id);
}


