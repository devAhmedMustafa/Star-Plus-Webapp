"use client"

import { authorize } from "@/utils/axios_auth"
import "@styles/Buttons/AuthBtn.css"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AuthForm({children, SubmitHandler}){

    const router = useRouter()
    
    useEffect(()=>{
        authorize().then(res=> router.push('/')); 
    })

    return (
        <form className="flex flex-col gap-3 items-center" method="post" onSubmit={SubmitHandler}>
            {children}

            <button className="auth-button type1" type="submit">
                <span className="btn-txt">Continue</span>
            </button>

        </form>
    )
}