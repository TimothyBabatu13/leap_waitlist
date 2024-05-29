import { validateEmail } from "@/utils/validateEmail";
import { db } from "./firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const POST = async (req)=>{
    const request = await req.json();
    const {type, email} = request
    
    const ref = collection(db, type);
    
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