"use client"

import members from "@/constants/members"

export default function AboutUs(){
    return(

        <div>

            <h1 className="text-3xl font-bold mb-5">Crew</h1>        

            <div className="flex gap-8 py-4">
                {members.map((m)=> <Indv_Box key={m.name} name={m.name} desc={m.desc}/>)}
            </div>
        </div>
        
    )
}

function Indv_Box({name, desc, instagram}){
    return (
        <section className="w-[50%] max-h-30 bg-gradient-to-r from-[#381b413d] to-[#21135560] flex p-2 rounded-sm">

            <div className="flex justify-center items-center w-[16%] p-2">
                <i className="fa-solid fa-circle-user text-5xl text-[#6161618e]"></i>
            </div>

            <div className="p-2">
                <h1 className="text-xl">{name}</h1>
                <p className="text-sm">{desc}</p>
            </div>
        </section>
    )
}