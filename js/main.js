
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
const btnImg = document.getElementById('btn__img')
var loginContainer = document.querySelector('.login-container');

console.log('loginContainer:', loginContainer);
console.log('img:', imgId);

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
      
      if(user.providerData[0].photoURL){
        localStorage.setItem('userPhoto', user.providerData[0].photoURL)
        console.log('foto el localstorage ', localStorage.getItem("userPhoto"));
      }
      

      loginContainer.style.display = 'none';
    }).catch((error)=> {
      console.error('Error during sign in:', error);
    })
})

console.log('',googleLogin); 

imgId.document.addEventListener('DOMContentLoaded', (event) => {
  // Retrieve the image URL from localStorage
  console.log('IMGAEN ',localStorage.getItem('userPhoto'));
  const savedPhotoURL = localStorage.getItem('userPhoto');
  
  if (savedPhotoURL) {
    const imgId = document.getElementById('imgId');
    if (imgId) {
      imgId.src = savedPhotoURL;
    }
  } else {
    console.log('No cached image URL found');
  }
});


btnImg.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert('cerro sesion')
    const imgDefault = 'data:image/png;base64,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'
    document.getElementById("imageId").src= imgDefault
    window.location.replace('../index.html')
  }). catch((error) => {
    console.log('',error);
  })
})