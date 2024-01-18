import axios from "axios";
import { BASE_URL } from "@/constants/Backend";

export const authorize = async ()=>{
    const res = axios.get(`${BASE_URL}auth/authorize/${localStorage['id']}`, {
        headers: {'token': localStorage['token']}
    })
    return res;
}

export const authenticate = async (user)=>{
    const res = await axios.post(`${BASE_URL}auth/authenticate`, user, {
        headers: {'Content-Type': 'application/json'}
    })
    return res;
}

export const register = async (user)=>{
    const res = await axios.post(`${BASE_URL}auth/create`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res;
}

export const sendVerifyEmail = async (email)=>{
    const res = await axios.post(`${BASE_URL}auth/send_activate_token/`, {email: email}, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res;

}

export const getUserByUsername = async (username)=>{
    const res = await axios.get(`${BASE_URL}auth/getUserByUsername/${username}`);
    return res;
}

export const logout = async ()=>{
    delete localStorage["token"];
    delete localStorage["id"];
}