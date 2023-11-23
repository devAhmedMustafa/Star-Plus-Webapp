"use client"

import members from "@/constants/members"

export default function AboutUs(){
    return(

        <div>

            <h1 className="text-3xl font-bold mb-5">Crew</h1>        

            <div className="flex flex-wrap gap-4 py-4 justify-around">
                {members.map((m)=> <Indv_Box key={m.name} name={m.name} desc={m.desc}/>)}
            </div>
        </div>
        
    )
}

function Indv_Box({name, desc, instagram}){
    return (
        <section className=" w-fit max-h-30 bg-gradient-to-r from-[#4d5df13d] to-[#5c2ffd60] flex p-1 px-1 rounded-full gap-4 min-h-[80px]">

            <div className="flex items-center w-[16%] p-2">
                <i className="fa-solid fa-circle-user text-5xl text-[#ffffff8e]"></i>
            </div>

            <div className="p-2 flex flex-col justify-center">
                <h1 className="text-xl">{name}</h1>
                <p className="text-sm">{desc}</p>
            </div>
        </section>
    )
}