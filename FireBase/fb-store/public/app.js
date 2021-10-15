// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsbxuF7uxbV4KCMqS4ytYNalVk7VpPJ0A",
  authDomain: "store-3b458.firebaseapp.com",
  projectId: "store-3b458",
  storageBucket: "store-3b458.appspot.com",
  messagingSenderId: "534534479084",
  appId: "1:534534479084:web:7dd2b46f0b316b42fc99c9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
console.log(firebase);
const auth = getAuth(firebase);
console.log(auth);

//get element
const signInG = document.getElementById('loginWithGoogle');

//Sign in with Google
const provider = new GoogleAuthProvider();
signInG.addEventListener('click', ()=>{
    signInWithPopup(auth, provider)
    .then((cred)=>{
        console.log(cred);
    }).catch((err)=>{
        if(err)throw err;
    })
})
onAuthStateChanged(auth, (user)=>{
    if(user){
        console.log(`logged in ${user.displayName}`);
    }else {
        console.log('not logged in');
    }
})

  


