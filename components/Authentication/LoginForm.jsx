"use client"

import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../app/Context/store";
import { authenticate } from "@/utils/AxiosAuth";
import AuthForm from "@/components/Authentication/AuthForm";
import { useState } from "react";
import "@styles/Inputs.css"

export default function LoginForm(){

    const router = useRouter();
    const {logged, setLogged} = useGlobalContext();
    const [error, setError] = useState("")

    const SubmitHandler = (e)=>{
        e.preventDefault();
        const eForm = e.target;
        const form = {
            'username': eForm.username.value,
            'password': eForm.password.value
        }

        authenticate(form).then((res)=>{
            localStorage['id'] = res.data._id;
            localStorage['token'] = res.data.token;
            setLogged(true);
            router.push('/');
        }).catch(err=> setError(err.response.data));
    }

    return (
        <AuthForm SubmitHandler={SubmitHandler}>
            <div className="textInputWrapper w-[300px]">
                <input placeholder="Username" type="username" name="username" className="textInput"/>
            </div>

            <div className="textInputWrapper w-[300px]">
                <input placeholder="Password" type="password" name="password" className="textInput"/>
            </div>

            <span className="text-red-600 text-sm">{error}</span>
        </AuthForm>
    )
}