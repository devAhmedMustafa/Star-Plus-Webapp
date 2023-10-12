"use client"

import Image from "next/image"
import cover from "@assets/images/fausto-sandoval-w5m3PIGvkqI-unsplash.jpg"
import Translations from '@/components/TranslationBtns';

export default function SloganSec(){
    return (
        <div className="flex flex-col relative h-fit overflow-hidden gap-10">
            <div className="z-10 flex flex-col gap-6">
                
                <p className="text-8xl 2xl:text-9xl font-extrabold w-[60%]">
                    Don't ever quit a challenge
                </p>

                <p className="w-[30%]">
                    Star plus is a games development startup, Making 2D games with unity engine.<br/>
                    A Studio substracted from ELITE team. 
                </p>

            </div>
            
            <div className="overflow-hidden max-w-[70%] absolute top-0 right-0"><Image src={cover} className="100%"/></div>

            <Translations/>
        </div>
    )
}