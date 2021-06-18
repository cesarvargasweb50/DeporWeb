import {
  getAuth
} from "../lib/fabrica.js";
import {
  getString,
} from "../lib/util.js";
import {
  guardaUsuario,
} from "./usuarios.js";

/** @type {HTMLFormElement} */
const forma = document["forma"];

/**
 * @param {Event} evt
 * @param {FormData} formData
 * @param {string} id  */
export async function
  guardaUsuario(evt, formData,
    id) {
  try {
    evt.preventDefault();
    const rolIds =
      formData.getAll("rolIds");
    await daoUsuario.
      doc(id).
      set({
        "uno","dos","tres","cuatro","cinco","seis"
    });
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);

  } catch (e) {
    muestraError(e);
  }
}
