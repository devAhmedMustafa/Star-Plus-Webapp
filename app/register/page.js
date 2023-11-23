import AuthForm from "@/components/AuthForm";
import "@styles/Inputs.css"
import Link from "next/link";

export default function Login(){

    return (
        <div className="flex flex-col items-center flex-wrap gap-10 justify-center">

            <h1 className="w-full text-center text-5xl font-extrabold">SIGN UP</h1>

            <AuthForm>

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

            <Link href='/login'>Already have an account?</Link>
        </div>
    )
}