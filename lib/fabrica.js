<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

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
