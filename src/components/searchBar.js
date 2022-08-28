import { React, useState,useEffect } from "react";
import AnimeCard from "./animeCard";
import '../css/scroller.css'

export default function Search(props) {
    const [name, setName] = useState('')
    const [anime_name, setAnime] = useState('naruto')
    const [animeList, setList] = useState([])
    
    const matches = animeList.map((anime, index) => {
        return <AnimeCard val={anime} key={index} />
    })
    const fetchAnime = async (anime_name) => {
        const data = await fetch(
            `https://api.jikan.moe/v3/search/anime?q=${anime_name}&order_by=title&sort=asc&limit=10`
        ).then((res) => res.json());

        setList(data.results);
    };
    useEffect(()=>{
        setAnime(name)
    },[name])
    const handleSearch =()=> {
        fetchAnime(anime_name);
        
    };
    console.log(animeList)

    return (
        <>
            <div className="w-full  mt-12 ">
                <div className="w-full sm:w-6/12  h-full float-right py-3 ">
                    <input onInput={(e) => setName(e.target.value)} className=" text-lg p-3 outline-none w-9/12 " type="text" placeholder="Search...." />
                    <button onClick={handleSearch} className="p-2 sm:px-3 sm:py-2  text-md sm:text-lg  text-white bg-slate-600 rounded-md ">Search</button>
                </div>
                {matches.length > 0 ? <div className="w-full ">
                    <div className="w-full h-full flex flex-col px-5 py-6 ">
                        <p className="text-lg w-9/12 sm:w-6/12  text-slate-700 font-semibold px-2 py-3 border-b-2">Showing results for:{anime_name}</p>
                        <div className="wrapper ">
                            {matches}
                        </div>
                    </div>
                </div> : ''}



            </div>

        </>
    )
}
