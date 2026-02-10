import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCX3c2j4XrZUhA3DlPO8M4Q5EUa21dnkro",
  authDomain: "neet-edge-7c52f.firebaseapp.com",
  projectId: "neet-edge-7c52f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

window.login = () => {
  signInWithEmailAndPassword(auth,email.value,password.value)
  .then(()=>location.href="home.html")
  .catch(e=>msg.innerText=e.message);
};

window.register = () => {
  createUserWithEmailAndPassword(auth,email.value,password.value)
  .then(()=>location.href="home.html")
  .catch(e=>msg.innerText=e.message);
};

window.logout = () => {
  signOut(auth).then(()=>location.href="login.html");
};

export { onAuthStateChanged };
