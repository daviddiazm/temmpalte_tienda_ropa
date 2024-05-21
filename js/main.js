
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2fCK4ErswWvo9nHziMVnoVNOylZ9oNxE",
  authDomain: "paginaropacontact.firebaseapp.com",
  databaseURL: "https://paginaropacontact-default-rtdb.firebaseio.com",
  projectId: "paginaropacontact",
  storageBucket: "paginaropacontact.appspot.com",
  messagingSenderId: "1068371091767",
  appId: "1:1068371091767:web:65ef99b20e6a232950bab2",
  measurementId: "G-VE2L3BCN71"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//inicializar otras variables
const img = document.getElementsByClassName("img_user")
const imgId = document.getElementById("imgId")
var loginContainer = document.querySelector('.loginContainer');



signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

// const googleLogin = document.querySelector('#googleauthLogin');
const googleLogin = document.getElementById('googleauthLogin');

googleLogin.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user

      //codigo personalizado
      console.log('',user);
      alert(`Bienvenido ${user.displayName}`)
      // alert(`Bienvenido ${user.providerId}`)
      // img.style.backgroundImage = url(`${user.photoURL}`)
      // imgId.src = user.photoURL
      // console.log('array info ',user.providerData[0].photoURL);
      document.getElementById("imageId").src= user.providerData[0].photoURL;
      // loginContainer.style.display = 'none;
    }).catch((error)=> {

    })
})

console.log('',googleLogin);