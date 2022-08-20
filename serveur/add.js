 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCtWB9Y30JpyypK6YPi-MgOUZpTwjQ1f2M",
   authDomain: "adminedashboard-d5934.firebaseapp.com",
   databaseURL:"https://adminedashboard-d5934-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "adminedashboard-d5934",
   storageBucket: "adminedashboard-d5934.appspot.com",
   messagingSenderId: "804791490886",
   appId: "1:804791490886:web:35ac9a0afda861732d2d47"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 

 const myform = document.getElementById('myform');

 function submitform(e){
  e.preventDefault();
  const email =document.getElementById("email").value;
  const password =document.getElementById("password").value;
  const address =document.getElementById("address").value;
  const city =document.getElementById("city").value;
  const zip =document.getElementById("zip").value;
  console.log(email,password,address,city,zip);

if(
  email.trim().length === 0 ||  password.trim().length === 0 || address.trim().length === 0 ||  city.trim().length === 0 ||  zip.trim().length === 0
){ alert ('Remplire tout les champs svp !');}
else{
  createUser(email ,password,address,city,zip);
  alert("user created successfuly :D !");
  myform.reset();
}
 }
 function createUser(email ,password,address,city,zip){
  const db = getDatabase();
  set(ref(db,'users/'+ email.slice(0,4)
  +Math.floor(Math.random()*100).toString()),{
    EMAIL :email,
    PASSWORD : password,
    ADDRESS : address,
    CITY:city,
    ZIP_CODE : zip
  })
 }

 myform.addEventListener("submit",(e)=>submitform(e))