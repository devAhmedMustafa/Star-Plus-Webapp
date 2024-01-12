"use client"

import AuthForm from "@/components/AuthForm";
import Oscillations from "@/components/Oscillations";
import SloganSec from "@/components/SloganSec";
import { register } from "@/utils/axios_auth";
import { useRouter } from "next/navigation"
import "@styles/Inputs.css"
import Link from "next/link";

export default function Register(){

    const router = useRouter();

    const SubmitHandler = (e)=>{
        e.preventDefault();
        const eForm = e.target;

        const form = {
            'username': eForm.username.value,
            'password': eForm.password.value
        }

        register(form).then((res)=>{
            router.push('/login')
        }).catch((err)=> console.error(err));
    }

    return (
        <div className="flex flex-col items-center flex-wrap gap-10 justify-center">

            <h1 className="w-full text-center text-5xl font-extrabold">SIGN UP</h1>

            <SloganSec>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <AuthForm SubmitHandler={SubmitHandler}>

                        <div className="textInputWrapper w-[300px]">
                            <input placeholder="Username" type="username" name="username" className="textInput"/>
                        </div>

                        <div className="textInputWrapper w-[300px]">
                            <input placeholder="Password" type="password" name="password" className="textInput"/>
                        </div>
                        
                        <div className="textInputWrapper w-[300px]">
                            <input placeholder="Confirm Password" type="password" name="password2" className="textInput"/>
                        </div>

                    </AuthForm>
                </div>

                <Oscillations/>

            </SloganSec>

            <Link href='/login'>Already have an account?</Link>
        </div>
    )
}