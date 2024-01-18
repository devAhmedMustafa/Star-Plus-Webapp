"use client"

import "@styles/Inputs.css"
import { useEffect, useState } from "react"

export default function TextInput({name, type}){


    return (
        <div className="w-[300px]">
            <div className="textInputWrapper w-full">
                <input placeholder={(name.charAt(0).toUpperCase() + name.slice(1)).replace('_', ' ')} type={type} name={name} className="textInput" required/>
            </div>
            
        </div>
        
    )
}