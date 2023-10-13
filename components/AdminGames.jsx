"use client"

import { delete_game, fetch_games_list } from "@/utils/axios_games"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import "@styles/DeleteBtn.css";
import { BASE_URL } from "@/constants/Backend"

export default function AdminGames(){

    const [games, setGames] = useState([]); 

    useEffect(()=>{
        fetch_games_list().then(res=> setGames(res.data)).catch(err => console.error(err))
    }, [])

    return (
        <div className=" columns-4">
            {games.map((g)=> <GameBox id={g._id} name={g.name} cover={g.cover}/>)}
        </div>
    )
}

function GameBox({id, name, cover}){
    return (
        <div className="relative rounded-lg overflow-hidden">
            <img src={`${cover}`} className="w-full"/>

            <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
                <DeleteBtn id={id}/>
            </div>
        </div>
    )
}

function DeleteBtn({id}){

    const deleting = ()=>{
        delete_game(id).then((res)=>{
            games.filter((e)=> e._id != id);
        });
    }

    return (
        <button class="noselect" onClick={deleting}>
            <span class="text">Delete</span>
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
            </span>
        </button>
    )
}