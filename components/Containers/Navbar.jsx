"use client";

import { authorize, logout } from "@/utils/AxiosAuth";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@styles/Buttons/LogoutBtn.css"
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/Context/store";

export default function Navbar(){

    const [user, setUser] = useState({});
    const {logged, setLogged} = useGlobalContext();

    useEffect(()=>{
        authorize().then((res)=>{
            setUser(res.data);
            setLogged(true);
        })
    }, [logged])

    return (
        <nav className="flex flex-wrap px-2 justify-center md:justify-between items-center w-full sticky bg-[rgba(22,22,22,0.58)] rounded-full mt-2">
            <Section>
                <Link href="/games">Games</Link>
                <Link href="/assets">Assets</Link>
                <Link href="/">About</Link>
                <Link href="/contact">Contact</Link>
            </Section>

            <Section extraClasses="justify-center items-center">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <Link target="_blank" href="https://www.instagram.com/starplus.games"><i className="fa-brands fa-instagram"></i></Link>
                <i className="fa-brands fa-youtube"></i>
            </Section>

            <Section extraClasses="justify-end">
                <div className="flex gap-4 border-[1px] py-1 px-4 border-[#464646fb] rounded-full">
                    {/* If user is logged in show logout button and username */}
                    {
                        logged?
                        <div className="relative flex gap-2"> 
                            <p className="flex gap-2 items-center">
                                <i class="fa-solid fa-circle-user text-2xl"></i>Hello {user.username}
                            </p>
                            {/* <UserInfo/> */}
                            <Logout/>
                        </div>:
                        <>
                            <Link className="border-r-[1px] pr-4 border-[#ffffff4b]" href="/login">Login</Link>
                            <Link href="/register">Sign Up</Link>
                        </>
                    }
                </div>
            </Section>
        </nav>
    )
}

function Logout(){

    const router = useRouter();
    const {logged, setLogged} = useGlobalContext();

    const OnClickLogout = ()=>{
        logout().then(res=> {
            setLogged(false);
            router.push('/login');
        });
    }

    return (
        <button className="Btn" onClick={OnClickLogout}>
  
            <div className="sign">
                <i className="fa-solid fa-right-from-bracket text-[#1c1c1c]"></i>
            </div>
  
            <div className="text">Logout</div>
        </button>

    )
}

function Section({children, extraClasses}){

    return (
        <section className={`flex gap-6 text-x p-2 lg:w-[30%] ${extraClasses}`}>
            {children}
        </section>
    )
}