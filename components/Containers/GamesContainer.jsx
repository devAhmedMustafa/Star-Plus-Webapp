"use client"

import { fetch_games_list } from "@/utils/AxiosGames";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@styles/GameBox.css";

export default function GamesContainer(){

    const [games, setGames] = useState([]);

    useEffect(()=>{
        fetch_games_list().then(res=> setGames(res.data));
    }, [])

    return (
        <div>
            <div className="flex flex-col xl:flex-row justify-around xl:px-40 py-4 bg-neutral-900">
                
                {games.map((g)=> <GameBox name={g.name} cover={g.cover} desc={g.desc}/>)}
            </div>
        </div>
    )
}

function GameBox({name, cover, logo, desc}){
    return (
        <Link href={`/${name}`} className="flex relative rounded-sm overflow-hidden w-[350px] h-[350px]">
            <div className="w-full h-full">
                <img src={`${cover}`} className="w-full h-full object-cover"/>
            </div>

            <div className="absolute transition-all duration-300 top-0 left-0 z-10 w-full h-full flex p-4 flex-col dBox justify-center items-center">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] logo transition-all">
                    <Image src={logo} width={180} className="transition-all"/>
                </div>
            </div>
        </Link>
    )
}