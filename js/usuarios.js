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
    evt.preventDefault();
    const rolIds =
      formData.getAll("rolIds");
    console.log(formData.get("dep"));
    console.log(formData.get("nom"));
    console.log(formData.get("pais"));
    console.log(formData.get("posi"));
    console.log(formData.get("tel"));

    
    await daoUsuario.
      doc(id).
      set({
          formData.get("dep"),
          formData.get("nom"),
          formData.get("pais"),
          formData.get("posi"),
          formData.get("tel")
      });
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);
  } catch (e) {
    muestraError(e);
  }
}
