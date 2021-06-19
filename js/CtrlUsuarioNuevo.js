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
  console.log("El id es: %o,i");

  const id = getString(
    formData, "cue").trim();
  console.log("El id es: %i,i");
  await guardaUsuario(evt,
    formData, id);
}


