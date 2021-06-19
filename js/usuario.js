import {
  getFirestore
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";
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
  guardaUsuario(evt, formData,
    id) {
  try {
    evt.preventDefault();

      const nombre =
      formData.get("nom");

      const deporte =
      formData.get("dep");

      const equipo =
      formData.get("ewui");
       

    await daoUsuario.
      doc(id).
      set({        
          depo_rec: deporte,
          equipo_rec: equipo,
          nom_rec: nom
      });
    
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);
  } catch (e) {
    muestraError(e);
  }
}
