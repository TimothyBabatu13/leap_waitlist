'use client';

import { useContext, useEffect, useRef, useState } from "react";
import { context } from "./ClientLayout";
import { validateEmail } from "@/utils/validateEmail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Input = () => {

    const { focus } = useContext(context);
    const ref = useRef(null);

    
    const [email, setEmail] = useState("");
    const [loading, setIsLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        if(!isEmailValid) return;
      
        setIsLoading(true);
        
        try {
            const response = await fetch("api/", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email
              }),
            });

       
            const result = await response.json();
            
            console.log(result); 
            toast.success("Registration successful");   
          } catch (error) {
            console.log(error)
            setIsLoading(false)
            toast.error("Error occurred. Please re-register")
          }
            setEmail("")
            setIsLoading(false)
            return;
    }
    useEffect(()=> {
        focus && ref.current.focus();
    }, [focus])
  return (
   <form 
        className={`relative w-[100%] sm:w-[60%] mx-auto mt-[20px]`}
        onSubmit={handleSubmit}
    >
        <ToastContainer />
        <input 
            type="email"
            ref={ref}
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Enter your mail address"
            className={`border-[1px] text-[#D9D9D9] rounded-[8px] py-[15px] px-[12px] w-full text-[16px] bg-inherit border-[#F6F9F9] font-fourHundrend text-lightGrey`}
        />
        <button 
            type="submit"
            className={`bg-primary text-[black] -translate-y-2/4 text-[16px] font-sixHundrend rounded-[8px] py-[10px] px-[16px] absolute top-[50%] right-[5px]`}
        >
            {loading ? "Loading..." : "Submit"}
        </button>
    </form>
  )
}

export default Input