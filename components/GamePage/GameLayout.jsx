"use client"

import { download_game, fetch_game } from "@/utils/axios_games";
import { useEffect, useState } from "react"
import { BASE_URL } from "@/constants/Backend";
import "@styles/DownloadBtn.css";

export default function Game(){

    const [game, setGame] = useState({
        name: '',
        desc: '',
        genres: [],
    });

    const [gameSize, setGameSize] = useState();

    async function createFile(){
        const res = await fetch(`${game.game_files}`);
        const data = await res.blob();
        let metadata = {
            type: '.zip'
        }
        const file = new File([data], 'test.zip', metadata)
        setGameSize(parseFloat(file.size / 1000000))
    }


    useEffect(()=>{
        fetch_game(location.pathname).then(res=>{
            setGame(res.data);
            createFile();
        })
        .catch(err=>console.error(err));
        
    }, [])

    return (
        <div className="flex flex-row justify-center gap-8">
            <Trailer video_url={game.trailer}/>

            <div className="flex flex-col gap-5">
                <Details name={game.name} desc={game.desc} genres={game.genres} size={gameSize}/>
                <Download game_file={game.game_files}/>
            </div>

            <div className="rounded-md w-[70%] overflow-hidden shadow-2xl">
                <img className="w-full" src={`${game.cover}`}/>
            </div>
            
        </div>
    )
}

function Trailer({video_url}){

    return (
        
        <div className="overflow-hidden w-screen h-screen absolute top-0 left-0 -z-10">

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

            <p>{size}Mb</p>

        </div>
    )
}

function Download({game_file}){

    return (
        
        <a href={game_file} target="_blank" className="button">

            <i className="fa-solid fa-cloud-arrow-down"></i>

            <div className="text">
                Download
            </div>

        </a>
    )
}