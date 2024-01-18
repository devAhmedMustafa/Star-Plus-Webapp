import Oscillations from "@/components/Advanced CGs/Oscillations";
import RegisterForm from "@/components/Authentication/RegisterForm";
import SloganSec from "@/components/Containers/SloganSec";
import "@styles/Inputs.css"
import Link from "next/link";

export default function Register(){
    return (
        <div className="flex flex-col items-center flex-wrap gap-2 justify-center">

            <h1 className="w-full text-center text-5xl font-extrabold">SIGN UP</h1>

            <SloganSec>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <RegisterForm/>
                </div>

                <Oscillations/>

            </SloganSec>

            <Link href='/login'>Already have an account?</Link>
        </div>
    )
}