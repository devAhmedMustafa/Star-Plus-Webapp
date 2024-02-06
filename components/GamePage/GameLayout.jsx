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
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between overflow-hidden">
            <Trailer video_url={game.trailer}/>

            <div className="flex gap-4 flex-col">
                <Details name={game.name} desc={game.desc} genres={game.genres}/>
                <Download game_file={game.game_files}/>
            </div>

            <div className="rounded-md w-[600px] h-[600px] overflow-hidden hidden lg:block relative">
                <img className="w-full" src={`${game.cover}`}/>
                <img src={`${game.logo}`} alt="" className="absolute w-46 top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
            
        </div>
    )
}

function Trailer({video_url}){

    return (
        
        <div className="overflow-hidden w-full lg:w-screen lg:h-screen lg:absolute top-0 left-0 -z-10">

            <div className="hidden lg:block absolute w-full h-full bg-[#1414146e]">

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
        <div className="flex flex-col gap-4 lg:w-[60%]">
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