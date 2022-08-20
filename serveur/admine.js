 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
 import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
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
 const db = getDatabase(app);
 function AffichageUsers()
 {
  const allUsers =ref(db,"users/");
  onValue(allUsers,(snapshot)=>{
    const data =snapshot.val();
    var keys =Object.keys(data);
    for(let i=0; i<keys.length;i++){
      var current_user =keys[i];
      var email =data[current_user].email;
      var password =data[current_user].password;
      var adress =data[current_user].adress;
      var city =data[current_user].city;
      var zip =data[current_user].zip;
      console.log(ema)
    }
  })
 }

 AffichageUsers()