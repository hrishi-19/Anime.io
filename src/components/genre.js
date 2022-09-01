import { React, useState, useEffect } from "react";
import axios from "axios";
import '../css/scroller.css';
import AnimeCard from './animeCard'


export default function Genre(props) {
    const [genreList, setGenre] = useState([])

    const list = genreList.map((anime, index) => {
        return <AnimeCard id={anime.mal_id} img={anime.image_url} title={anime.title} score={anime.score} key={index} />
    })
    async function getData() {
        return await axios.get(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${props.id}&order_by=popularity&sort=desc`)
        .then((res) =>{
            if(res.status===200){
                return res.data
            }else {
                console.log(res.status)
            }
        }).catch((err)=>console.log(err))

    }
    useEffect(() => {
        getData().then(animeData => {
            setGenre(animeData.results)
        })


    }, [])
    return (
        <>
            {genreList && <div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <p className="text-2xl w-9/12 sm:w-6/12 text-slate-700 font-semibold px-2 py-3 border-b-2">{props.name}</p>
                    <div className="wrapper ">
                        {list}
                    </div>
                </div>
            </div>}
        </>
    )
}