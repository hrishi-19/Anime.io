import { React, useState, useEffect } from "react";
import axios from "axios";
import'../css/scroller.css';
import AnimeCard from './animeCard'


export default function TopAnime() {
    const [topList, setTop] = useState([])
   
    const list = topList.map((top, index) => {
        return <AnimeCard id={top.mal_id} img={top.images.webp.large_image_url} title={top.title}  score={top.score} key={index} />
    })
    async function getData(){
        return await axios.get("https://api.jikan.moe/v4/top/anime").then(res=>res.data)
        
    }
    useEffect(() => {
        getData().then(topdata => {
            setTop(topdata.data)
        })


    }, [])
    return (
        <div className="w-full ">
            <div className="flex w-full flex-col px-5 py-6 ">
                <p className="text-2xl w-9/12 sm:w-6/12 text-slate-700 font-semibold px-2 py-3 border-b-2">Top Rated</p>
                <div className="wrapper ">
                    {list}
                </div>
            </div>
        </div>
    )
}