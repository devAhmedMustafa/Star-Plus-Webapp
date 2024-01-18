import { getUserByUsername } from "./AxiosAuth";
import axios from "axios";
import { BASE_URL } from "@/constants/Backend";

export const UsernameValidation = async (username)=>{
    const res = axios.get(`${BASE_URL}auth/getUserByUsername/${username}`);
    return res;
}

export const PasswordValidation = (password)=>{
    if (password < 8) return 'Password is too short';
    if (!(/[a-z]/.test(password))) return 'Password must contain a small letter';
    if (!(/[0-9]/.test(password))) return 'Password must contain a number';
    if (!(/[A-Z]/.test(password))) return 'Password must contain a capital letter';
    return '';
}

export const PasswordConfirmation = (password, password2)=>{
    if (password != password2) return 'Passwords do not match';
    return '';
}