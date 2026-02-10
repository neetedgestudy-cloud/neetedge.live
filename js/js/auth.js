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
const auth = getAuth(app);

/* 🔑 LOGIN */
window.login = function () {
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "home.html")
    .catch(err => document.getElementById("msg").innerText = err.message);
};

/* 📝 REGISTER */
window.register = function () {
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "home.html")
    .catch(err => document.getElementById("msg").innerText = err.message);
};

/* 🚪 LOGOUT */
window.logout = function () {
  signOut(auth).then(() => location.href = "login.html");
};

/* 🔒 PAGE PROTECT */
window.protectPage = function () {
  onAuthStateChanged(auth, user => {
    if (!user) location.href = "login.html";
  });
};
