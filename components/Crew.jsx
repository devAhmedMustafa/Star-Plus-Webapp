"use client"

import members from "@/constants/members"
import Link from "next/link"

export default function AboutUs(){
    return(

        <div>

            <h1 className="text-3xl font-bold mb-5">Crew</h1>
            
            <div className="full flex flex-col flex-wrap gap-4 py-4 justify-around">
                {members.map((m)=> <Indv_Box key={m.name} name={m.name} role={m.role} color={m.color} insta={m.insta}/>)}
            </div>

        </div>
        
    )
}

function Indv_Box({name, role, insta}){
    return (
        <div className={`bg-[#2020208c] rounded-sm w-full text-start flex h-[50px] items-center transition-all hover:bg-[#f7257dc9] hover:drop-shadow-glow`}>
            <p className="text-lg w-[15%] py-2 px-4">{name}</p>
            <div className="w-[85%] h-full flex justify-between items-center p-4">
                <p className="40%">
                    {role}
                </p>
                <div>
                    { insta&& <Link target="_blank" href={insta}><i className="fa-brands fa-instagram text-xl"></i></Link>
                    }
                </div>
            </div>
        </div>
    )
}