"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { sendVerifyEmail } from "@/utils/AxiosAuth";

export default function EmailSender(){
    const userParams = useSearchParams();
    const email = userParams.get('email');
    useEffect(()=>{
        sendVerifyEmail(email).then((res)=> console.log(res)).catch(err=> console.error(err));
    }, [])

    return (
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl text-center">Check your Gmail
        </p>
    )
}