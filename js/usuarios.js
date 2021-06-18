import {
  getFirestore
} from "../lib/fabrica.js";
import {
  subeStorage
} from "../lib/storage.js";
import {
  cod, getForánea, muestraError
} from "../lib/util.js";
import {
  muestraUsuarios
} from "./navegacion.js";


const firestore = getFirestore();
const daoRol = firestore.
  collection("Rol");
const daoUsuario = firestore.
  collection("Usuario");

/**
 * @param {Event} nom
 * @param {FormData} formData
 
 * @param {string} id  */
export async function
  guardaUsuario(id, nombre, deporte, posicion, pais, telefono) {
  try {
    const rolIds =
      formData.getAll("rolIds");
    await daoUsuario.
      doc(id).
      set({
          nombre,deporte,posicion,pais,telefono
      });
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);
  } catch (e) {
    muestraError(e);
  }
}
