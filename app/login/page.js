import Oscillations from "@/components/Advanced CGs/Oscillations";
import LoginForm from "@/components/Authentication/LoginForm";
import SloganSec from "@/components/Containers/SloganSec";
import Link from "next/link";


export default function Login(){

    return (
        <div className="flex flex-col items-center flex-wrap gap-10 justify-center">

            <h1 className="w-full text-center text-5xl font-extrabold">LOGIN</h1>

            <SloganSec>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <LoginForm/>
                </div>
                <Oscillations/>
            </SloganSec>

            <Link href='/register'>Don't have an account?</Link>
        </div>
    )
}