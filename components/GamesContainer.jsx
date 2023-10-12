"use client"

import { BASE_URL } from "@/constants/Backend";
import { fetch_games_list } from "@/utils/axios_games";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GamesContainer(){

    const [games, setGames] = useState([]);

    useEffect(()=>{
        fetch_games_list().then(res=> setGames(res.data));
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">All Games</h1>
            <div className=" columns-4">
                
                {games.map((g)=> <GameBox name={g.name} cover={g.cover}/>)}
            </div>
        </div>
    )
}

function GameBox({name, cover}){
    return (
        <Link href={`/${name}`} className="relative rounded-sm overflow-hidden flex flex-col gap-1">
            <img src={`${BASE_URL}${cover}`} className="w-full"/>
            <h1 className="text-xl">{name}</h1>
        </Link>
    )
}