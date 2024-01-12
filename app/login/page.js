"use client"

import AuthForm from "@/components/AuthForm";
import Oscillations from "@/components/Oscillations";
import SloganSec from "@/components/SloganSec";
import { authenticate } from "@/utils/axios_auth";
import "@styles/Inputs.css"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../Context/store";

export default function Login(){

    const router = useRouter();
    const {logged, setLogged} = useGlobalContext();

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
        }).catch(err=> console.error(err))
    }

    return (
        <div className="flex flex-col items-center flex-wrap gap-10 justify-center">

            <h1 className="w-full text-center text-5xl font-extrabold">LOGIN</h1>

            <SloganSec>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <AuthForm SubmitHandler={SubmitHandler}>
                        <div className="textInputWrapper w-[300px]">
                            <input placeholder="Username" type="username" name="username" className="textInput"/>
                        </div>

                        <div className="textInputWrapper w-[300px]">
                            <input placeholder="Password" type="password" name="password" className="textInput"/>
                        </div>  
                    </AuthForm>
                </div>

                <Oscillations/>
            </SloganSec>

            <Link href='/register'>Don't have an account?</Link>
        </div>
    )
}