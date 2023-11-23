import axios from "axios";
import { BASE_URL } from "@/constants/Backend";

export const isAuthenticated = ()=>{
    if (localStorage['token']){
        axios.get(`${BASE_URL}/auth/isAuth`, {
            headers: {'token': localStorage['token']}
        })
    }
    else{
        return false;
    }
}

export const register = async (user)=>{
    const res = await axios.post(`${BASE_URL}/auth/create`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res;
}