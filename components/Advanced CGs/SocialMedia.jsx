"use client"

import logo from "@assets/STAR.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SocialMediaAtom(){

    useEffect(()=>{

        let canvas = document.querySelector('#myCanvas');
        let ctx = canvas.getContext('2d');
        
        let prev_x, prev_y;
        for (let t = -6.3; t <= 6.3; t++){
            let x = (Math.sin(2*t) + 3*Math.sin(t)) * 10;
            let y = (2*Math.sin(3*t)) * 10;
            if (!prev_x && !prev_y){
                ctx.moveTo(prev_x,prev_y);
                ctx.lineTo(x, y);
                ctx.stroke();
            } 
            prev_y = y; prev_x = x;
        }
    }, [])

    return (
        <div className="relative">
            {/* Core */}
            <div>
                <Image className="" id="logo" src={logo} width={110}/>
            </div>

            <div className="">
                <Orbited _id="insta" start={-6.3} speed={1}>
                    <i class="fa-brands fa-instagram"></i>
                </Orbited>
                <Orbited _id="facebook" start={-5} speed={1}>
                    <i class="fa-brands fa-facebook"></i>
                </Orbited>
                <Orbited _id="tiktok" start={-1} speed={1}>
                    <i class="fa-brands fa-tiktok"></i>
                </Orbited>
                <Orbited _id="yt" start={3} speed={1}>
                    <i class="fa-brands fa-youtube"></i>
                </Orbited>
                <Orbited _id="linkedin" start={6} speed={1}>
                    <i class="fa-brands fa-linkedin"></i>
                </Orbited>

                <canvas id="myCanvas" className="absolute" width={100} height={100}>
                </canvas>
            </div>
        </div>
    )
}

function Orbited({_id, speed, start, children}){
    
    let t = start;

    function Animate(){

        const width = document.querySelector('#logo').width;

        if (t <= 6.3 && t >= -6.3){
            t += 0.005 * speed; 
        }
        else{
            t = -6.3;
        }

        let body = document.querySelector(`#${_id}`);

        let x_Length = (Math.sin(2*t) + 3*Math.sin(t))*(width/3);
        
        body.style.left = `${x_Length}px`;

        let y_Length = (2*Math.sin(3*t))*(width/3);
        body.style.top = `${y_Length}px`;

        requestAnimationFrame(Animate);
    }

    useEffect(() => {
        Animate()
    });

    return (
        <div id={_id} className="absolute">
            {children}
        </div>
    )
}