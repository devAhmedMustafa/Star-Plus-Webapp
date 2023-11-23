"use client";

import logo from "@assets/STARplus.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="py-4 flex justify-between items-center w-full">
            <Link href='/'>
                <Image src={logo} width={55}/>
            </Link>

            <section className="flex gap-6 text-xl">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
            </section>
            
        </nav>
    )
}