"use client"

import CheckBox from "./CheckBox";
import Search from "./Search";

export default function Filter({keywords}){
    return (
        <div className="flex justify-between w-full items-center bg-[#252525] py-3 px-6 rounded-md lg:rounded-full flex-wrap-reverse gap-4">
            <div className="flex w-full lg:w-[30%] justify-around">
                {keywords.map((k=> <button className="flex gap-2 items-center text-sm">{k.icon}{k.text}</button>))}
            </div>

            <div className="w-full justify-center lg:w-[30%] flex gap-10">
                <CheckBox label="Free"/>
                <CheckBox label="New"/>
                <CheckBox label="Recommended"/>
            </div>

            <div className="w-full flex justify-center lg:justify-end lg:w-[30%]">
                <Search/>
            </div>
        </div>
    )
}

