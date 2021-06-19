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

      const posicion =
      formData.get("pos");
    
       const pais =
      formData.get("pais");

      const telefono =
      formData.get("tel");
       

    await daoUsuario.
      doc(id).
      set({        
          depor_dep: deporte,
          nom_dep: nombre,
          pais_dep: pais,
          posi_dep: posicion,
          tel_dep: telefono,
          status_dep: 1
      });
    
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);
  } catch (e) {
    muestraError(e);
  }
}
