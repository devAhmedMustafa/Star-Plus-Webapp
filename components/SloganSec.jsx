"use client"

import Image from "next/image"
import cover from "@assets/images/fausto-sandoval-w5m3PIGvkqI-unsplash.jpg"
import Translations from '@/components/TranslationBtns';

export default function SloganSec(){
    return (
        <div className="flex flex-col relative h-fit gap-10 overflow-hidden">
            <div className="z-10 flex flex-col gap-6">
                
                <p className="md:text-8xl text-6xl 2xl:text-8xl font-extrabold w-full md:w-[60%]">

                    <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-400 mb-8">STAR PLUS</h1>

                    Don't ever quit a challenge
                </p>

                <p className="w-full xl:w-[30%]">
                    Star plus is a games development startup, Making 2D games with unity engine.<br/>
                    A Studio substracted from ELITE team. 
                </p>

            </div>
            
            <div className="overflow-hidden hidden md:block md:max-w-[70%] absolute top-0 rounded-sm right-0"><Image src={cover} className="100%"/></div>

            <Translations/>
        </div>
    )
}