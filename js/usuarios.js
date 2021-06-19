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
    alert(id);
    alert(formData);
    /*
    const rolIds =
      formData.getAll("rolIds");
    alert(rolIds);
    await daoUsuario.
      doc(id).
      set({        
          depor_dep: "Futbol",
          nom_dep: "Christiano Rolando",
          pais_dep: "Mexico ",
          posi_dep: "Delantero",
          tel_dep: "5578987451"
      });*/

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
          tel_dep: "5578987451"
      });
    
    const avatar =
      formData.get("avatar");
    await subeStorage(id, avatar);
  } catch (e) {
    muestraError(e);
  }
}
