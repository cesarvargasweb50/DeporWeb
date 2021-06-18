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
const forma = document["forma"];


/** @param {Event} evt */
async function guarda(evt) {
  const formData =
    new FormData(forma);
  const id = getString(
    formData, "cue").trim();
  await guardaUsuario(evt,
    formData, id);
}
