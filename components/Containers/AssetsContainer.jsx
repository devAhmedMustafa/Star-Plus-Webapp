"use client"

import Image from "next/image";
import "@styles/RatingStars.css";
import img1 from "@assets/dev_img/download5.png";
import img2 from "@assets/dev_img/download6.png";
import img3 from "@assets/dev_img/download7.png";
import { useEffect } from "react";

export default function AssetsContainer(){

    const assets = [
        {
            preview: img1,
            name: "Test1",
            rate: 4,
            price: 0,
        },
        {
            preview: img2,
            name: "Test2",
            rate: 1,
            price: 0,
        },
        {
            preview: img3,
            name: "Test2",
            rate: 2,
            price: 0,
        },
        {
            preview: img1,
            name: "Test2",
            rate: 0,
            price: 0,
        },
        {
            preview: img2,
            name: "Test2",
            rate: 5,
            price: 0,
        },
        {
            preview: img3,
            name: "Test2",
            rate: 4,
            price: 0,
        }
    ]

    return (
        <div className="grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 gap-x-12 bg-[#252525] rounded-md">
            {assets.map((a)=> <AssetBox asset={a}/>)}
        </div>
    )
}

function AssetBox({asset}){

    return (
        <div className="flex gap-2 flex-wrap justify-between">
            <div className="rounded-md overflow-hidden w-full">
                <Image src={asset.preview} alt="" className="object-cover h-full"/>
            </div>

            <div className="flex flex-col w-[50%]">
                <p className="truncate text-xl">{asset.name}</p>
                <Ratings rate={asset.rate}/>
                <p className="text-sm">{asset.price==0?<span>Free</span>:<span>{asset.price}L.E.</span>}</p>
            </div>

            <button className="mx-4">
                <i className="fa-solid fa-cart-plus text-xl text-stone-300"></i>
            </button>
        </div>
    )
}

function Ratings({rate}){

    useEffect(()=>{
        const ratings = document.querySelectorAll(".rating label");

        for (let i = 0; i < rate; i++){
            ratings[i].classList.add("text-violet-400");
        }

    }, [])


    return (
        <div className="rating w-fit">
            <label for="star1"></label>
            <label for="star2"></label>
            <label for="star3"></label>
            <label for="star4"></label>
            <label for="star5"></label>
        </div>
    )
}