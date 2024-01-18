"use client"

import { fetch_game } from "@/utils/AxiosGames";
import { useEffect, useState } from "react"
import "@styles/Buttons/DownloadBtn.css";

export default function Game(){

    const [game, setGame] = useState({
        name: '',
        desc: '',
        genres: [],
    });

    useEffect(()=>{
        fetch_game(location.pathname).then(res=>{
            setGame(res.data);
        })
        .catch(err=>console.error(err));
        
    }, [])

    return (
        <div className="flex flex-row flex-wrap justify-between">
            <Trailer video_url={game.trailer}/>

            <div className="flex gap-4 flex-col">
                <Details name={game.name} desc={game.desc} genres={game.genres}/>
                <Download game_file={game.game_files}/>
            </div>

            <div className="rounded-md w-[400px] h-[400px] overflow-hidden hidden lg:block">
                <img className="w-full" src={`${game.cover}`}/>
            </div>
            
        </div>
    )
}

function Trailer({video_url}){

    return (
        
        <div className="overflow-hidden w-screen lg:h-screen lg:absolute top-0 left-0 -z-10">

            <div className="absolute w-full h-full bg-[#1414146e]">

            </div>

            {
                video_url!=undefined?
                <video width='100%' autoPlay loop muted>
                    <source src={`${video_url}`}/>
                </video>:
                <p>Not Supported</p>
            }
        </div>
        
    )
}

function Details({name, desc, genres, size}){

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-extrabold">{name}</h1>

            <div className="flex gap-2">{genres.map((g)=>
                <p className="px-4 py-2 rounded-full bg-[#00000077]">{g}</p>
            )}</div>

            <p className="text-lg text-[#b6b6b6]">{desc}</p>

        </div>
    )
}

function Download({game_file}){

    return (
        
        <a href={game_file} target="_blank" className="dw-button">

            <i class="fa-brands fa-google-drive"></i>

            <div className="btn-text flex items-center gap-2">
                Download
            </div>

        </a>
    )
}