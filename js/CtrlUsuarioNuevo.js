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
  checksRoles,
  guardaUsuario,
} from "./usuarios.js";

/** @type {HTMLFormElement} */
const forma = document["forma"];
/** @type {HTMLUListElement} */
const listaRoles = document.
querySelector("#listaRoles");

/** @param {Event} evt */
async function guarda(evt) {
  const formData =
    new FormData(forma);
  const id = getString(
    formData, "cue").trim();
  await guardaUsuario(evt,
    formData, id);
}
