"use client";

import { authorize, logout } from "@/utils/axios_auth";
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
    }, [])

    return (
        <nav className="flex flex-wrap py-2 justify-center md:justify-between items-center w-full">
            <Section>
                <Link href="/games">Games</Link>
                <Link href="/">Assets</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </Section>

            <Section extraClasses="justify-center">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <Link target="_blank" href="https://www.instagram.com/starplus.studio"><i className="fa-brands fa-instagram"></i></Link>
                <i className="fa-brands fa-youtube"></i>
            </Section>

            <Section extraClasses="justify-end">
                <div className="flex gap-4 border-[1px] py-1 px-4 border-[#464646fb] rounded-full">
                    {/* If user is logged in show logout button and username */}
                    {
                        logged?
                        <> 
                            <p className="flex gap-2 items-center"><i class="fa-solid fa-circle-user text-2xl"></i>Hello {user.username}</p>
                            <Logout/>
                        </>:
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
  
            <div class="sign">
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