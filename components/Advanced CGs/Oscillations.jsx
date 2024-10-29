"use client"

import { useEffect } from "react"

export default function Oscillations(){
    useEffect(()=>{
        let angle = 0;
        let lastTime = null;

        function Animate(time) {
            if (lastTime != null) {
                angle += (time - lastTime) * 0.0006;
            }

            lastTime = time;

            let wave = document.querySelector("#wave");
            let paths = [...document.querySelectorAll("svg path")];
            let width = window.innerWidth;

            wave.setAttribute("width", width);

            let i = 0;

            paths.forEach(path => {
                path.setAttribute(
                "d",
                "M0," + i + " C" +
                width * 0.33 +
                "," +
                (200 + Math.cos(angle) * 300) +
                " " +
                width * 0.9 +
                "," +
                (300 + Math.sin(angle) * 300) +
                " " +
                3000 +
                "," + i + ""
                );
                i+=30;
            });        

            requestAnimationFrame(Animate);
        }

        Animate();
    })
    return (
        <svg id="wave" className="svg w-full h-full" viewBox="0 0 2400 800">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
                    <stop stopColor="#e500a4" stopOpacity="1" offset="0%"></stop>
                    <stop stopColor="#6a00f4" stopOpacity="1" offset="100%"></stop>
                </linearGradient>
                <filter id="glow">
                    <fegaussianblur className="blur" result="coloredBlur" stdDeviation="1"></fegaussianblur>
                    <femerge>
                        <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                        <femergenode in="SourceGraphic"></femergenode>
                    </femerge>
                </filter>
            </defs>
            <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
                <path d="M 0 663 Q 600 245 1200 400 Q 1800 555 2400 663" opacity="0.14"></path>
                <path d="M 0 646 Q 600 245 1200 400 Q 1800 555 2400 646" opacity="0.52"></path><path d="M 0 629 Q 600 245 1200 400 Q 1800 555 2400 629" opacity="0.74"></path><path d="M 0 612 Q 600 245 1200 400 Q 1800 555 2400 612" opacity="0.74"></path><path d="M 0 595 Q 600 245 1200 400 Q 1800 555 2400 595" opacity="0.32"></path><path d="M 0 578 Q 600 245 1200 400 Q 1800 555 2400 578" opacity="0.42"></path><path d="M 0 561 Q 600 245 1200 400 Q 1800 555 2400 561" opacity="0.29"></path><path d="M 0 561 Q 600 245 1200 400 Q 1800 555 2400 561" opacity="0.29"></path><path d="M 0 561 Q 600 245 1200 400 Q 1800 555 2400 561" opacity="0.29"></path><path d="M 0 595 Q 600 245 1200 400 Q 1800 555 2400 595" opacity="0.32"></path><path d="M 0 578 Q 600 245 1200 400 Q 1800 555 2400 578" opacity="0.42"></path><path d="M 0 561 Q 600 245 1200 400 Q 1800 555 2400 561" opacity="0.29"></path><path d="M 0 595 Q 600 245 1200 400 Q 1800 555 2400 595" opacity="0.32"></path><path d="M 0 578 Q 600 245 1200 400 Q 1800 555 2400 578" opacity="0.42"></path>
            </g>
        </svg>
    )
}