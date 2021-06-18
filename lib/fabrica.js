/*  Initializa Firebase con la configuración del proyecto. Revisa la
 * configuración en tu servidor de Firebase.  */
// @ts-ignore
firebase.initializeApp({
  apiKey: "AIzaSyDl46kFOagDkvgu8m_TPzFA0n7Do2vxbhE",
    authDomain: "deporweb50.firebaseapp.com",
    projectId: "deporweb50",
    storageBucket: "deporweb50.appspot.com",
    messagingSenderId: "28702197046",
    appId: "1:28702197046:web:3bcbc8090902625f5e5f97",
    measurementId: "G-81RFLKTZFT"
});

/** Conexión a la base de datos
 * de Firebase.
 *  @returns {
      import("./tiposFire").
      Firestore} */
export function getFirestore() {
  // @ts-ignore
  return firebase.firestore();
}

/** Conexión al sistema de
 * autenticación de Firebase.
 *  @returns {
      import("./tiposFire").
      Auth} */
export function getAuth() {
  // @ts-ignore
  return firebase.auth();
}

/** Conexión al sistema de
 * storage de Firebase.
 *  @returns {
      import("./tiposFire").
      Storage} */
export function getStorage() {
  // @ts-ignore
  return firebase.storage();
}
