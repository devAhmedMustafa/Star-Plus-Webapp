import { BASE_URL } from "@/constants/Backend";
import axios from "axios"

const fetch_games_list = async ()=>{
    const res = await axios.get(`${BASE_URL}games/`);
    return res;
}

const fetch_game = async (name)=>{
    const res = await axios.get(`${BASE_URL}games/${name}`)
    
    return res;
}

const add_game = async (formData)=>{

    const res = await axios.post(`${BASE_URL}games/`, formData, {
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    });

    return res;
}

const delete_game = async (id)=>{
    const res = await axios.delete(`${BASE_URL}games/${id}`);
    return res;
}

const download_game = async (id)=>{
    const res = await axios.get(`${BASE_URL}games/download/${id}`,
    {
        responseType: 'blob'
    });
    return res;
}

export {fetch_games_list, fetch_game, delete_game, add_game, download_game};