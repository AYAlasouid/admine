 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getAuth  , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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
 const auth =getAuth();

    const formulaire = document.getElementById("resetpwd");

function Resetpassword(e){
  e.preventDefault();
  const emil =document.getElementById("email").value;
  console.log(emil);
  if(emil.trim().length=== 0){alert("please fill the form !")}
  else{
  sendPasswordResetEmail(auth,emil)
  .then(()=>{
    alert("a link has been sended to your email !");
  })

  .catch((error)=>{
    console.log(error);
    alert("Try Again!,an error happen");


  })

}




}
  formulaire.addEventListener('submit',(e)=>Resetpassword(e));
