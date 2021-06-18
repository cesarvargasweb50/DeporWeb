import {
  getFirestore
} from "../lib/fabrica.js";
import {
  subeStorage
} from "../lib/storage.js";


const firestore = getFirestore();
const daoRol = firestore.
  collection("Rol");
const daoUsuario = firestore.
  collection("Usuario");

/**
 * @param {Event} evt
 * @param {FormData} formData
 
 * @param {string} id  */
export async function
  guardaUsuario(evt, formData, id) {
  try {
    const rolIds =
      formData.getAll("rolIds");
    await daoUsuario.
      doc(id).
      set({
          formData.get("nom"),
          formData.get("dep"),
          formData.get("pos"),
          formData.get("pais"),
          formData.get("tel")
      });
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);
  } catch (e) {
    muestraError(e);
  }
}
