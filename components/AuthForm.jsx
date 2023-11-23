"use client"

import { register } from "@/utils/axios_auth"
import "@styles/AuthBtn.css"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AuthForm({children}){

    const navigate = useRouter()

    const SubmitHandler = (e)=>{
        e.preventDefault();
        const form = e.target;

        const formData = new FormData({
            username: form.username,
            password: form.password,
        });

        register(formData).then((res)=> navigate('/login'))
    }
    
    useEffect(()=>{
        if (localStorage['token']) navigate('/');
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