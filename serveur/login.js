 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCtWB9Y30JpyypK6YPi-MgOUZpTwjQ1f2M",
   authDomain: "adminedashboard-d5934.firebaseapp.com",
   projectId: "adminedashboard-d5934",
   storageBucket: "adminedashboard-d5934.appspot.com",
   messagingSenderId: "804791490886",
   appId: "1:804791490886:web:35ac9a0afda861732d2d47"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


 const formulaire= document.getElementById("LoginForm");
 function checklogin(e){
   e.preventDefault();
   const email =document.getElementById("exampleInputEmail1").value;
   const password =document.getElementById("exampleInputPassword1").value;
 
   console.log(email,password)
   const auth = getAuth();
   signInWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
     console.log(userCredential);
    alert('connection success')
    window.location="../page/admine.html
    0!!"
   })
   .catch((error)=>{
     console.log(error);
     alert('Password or email introuvable')
   })
 }
 
 
 
 formulaire.addEventListener("submit",(e)=>checklogin(e));