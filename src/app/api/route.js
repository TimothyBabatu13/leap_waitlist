import { validateEmail } from "@/utils/validateEmail";
import { db } from "./firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

const ref = collection(db, "waitListEmails");

export const POST = async (req)=>{
    
    const request = await req.json();
    const { email } = request;

    if(!validateEmail(email)){
      return new Response(JSON.stringify("Not a valid email"), {
        headers: {
          "Content-Type" : "application/json",
        },
        status: 400
      })
    }
    
    /* work on the logic to check if email already exists */
    
    const d = await addDoc(ref, {email})
    
    if(d.id){
      return new Response(JSON.stringify(`Registration successful.`), {
        headers: {
          "Content-Type" : "application/json",
        },
        status: 201
      })
    }
 

}


/*

//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJy20eEiiGjKeO8_J1rKLIZPczKPSXkt8",
  authDomain: "leap-671bd.firebaseapp.com",
  projectId: "leap-671bd",
  storageBucket: "leap-671bd.appspot.com",
  messagingSenderId: "430050031452",
  appId: "1:430050031452:web:7f306957f8951b7e41b399",
  measurementId: "G-CZQNCXDD6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/