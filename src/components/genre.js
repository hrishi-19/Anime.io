import { React, useState, useEffect,lazy,Suspense} from "react";
import axios from "axios";
import '../css/scroller.css';
import DummyBox from "./dummybox";
const AnimeCard=lazy(()=>import('../components/animeCard'))



export default function Genre(props) {
    const [genreList, setGenre] = useState([])

    
    function getData() {
        return axios.get(`https://api.jikan.moe/v4/anime?q=&genres=${props.id}&sort=desc&limit=20`)
        .then((res) =>{
            console.log(res.data)
            if(res.status===200){
                return res.data.data
            }if(res.status===429) {
               console.log('429 occured')
            }
            
        })

    }
    useEffect(() => {
        getData().then(animeData => {
                setGenre(animeData)
            
        })


    }, [])
    return (
        <>
            {genreList && <div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <p className="text-2xl w-9/12 sm:w-6/12 text-slate-700 font-semibold px-2 py-3 border-b-2">{props.name}</p>
                    <div className="wrapper ">
                        {
                            genreList.map((anime, index) => {
                                return <Suspense fallback={<DummyBox/>}>
                                    <AnimeCard id={anime.mal_id} img={anime.images.jpg.image_url} title={anime.title} score={anime.score} key={index} />
                                </Suspense>
                            })
                        }
                    </div>
                </div>
            </div>}
        </>
    )
}