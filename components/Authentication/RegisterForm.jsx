"use client"

import AuthForm from "@/components/Authentication/AuthForm";
import TextInput from "@/components/Functional/TextInput";
import { PasswordConfirmation, PasswordValidation, UsernameValidation } from "@/utils/Validations";
import { useState } from "react";
import { register } from "@/utils/AxiosAuth";
import { useRouter } from "next/navigation"

export default function RegisterForm(){

    const router = useRouter();
    const [errors, setErrors] = useState([]);

    const FormValidation = (username, password, password2)=>{
        let errors = [];
        UsernameValidation(username).then((res)=>{
            errors.push("Username is used.");
            setErrors(errors);
        }).catch((err)=>{
            errors.push(PasswordValidation(password));
            errors.push(PasswordConfirmation(password, password2));
            setErrors(errors);
        });
        return errors;
    }

    const SubmitHandler = (e)=>{
        e.preventDefault();
        const eForm = e.target;

        const errs = FormValidation(eForm.username.value, eForm.password.value, eForm.confirm_password.value);
        if (errs.length > 0 ){
            return;
        }

        const form = {
            'username': eForm.username.value,
            'email': eForm.email.value,
            'password': eForm.password.value,
            'country': eForm.country.value
        }

        register(form).then((res)=>{
            router.push(`/email_sent/?email=${eForm.email.value}`)
        }).catch((err)=> console.error(err));
    }

    return (
        <AuthForm SubmitHandler={SubmitHandler}>

            <TextInput type="username" name="username"/>

            <TextInput type="email" name="email"/>

            <TextInput type="password" name="password"/>
            
            <TextInput type="password" name="confirm_password"/>

            <select name="country" className="bg-[#252525] w-[300px] p-2 text-center rounded-md">
                <option value="Egypt">Egypt</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Other">Other</option>
            </select>

            <span>{errors.map((e)=> <p key={e} className="text-red-600 text-sm">{e}</p>)}</span>

        </AuthForm>
    )
}