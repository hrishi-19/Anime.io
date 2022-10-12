import { React, useState, useEffect,lazy,Suspense} from "react";
import axios from "axios";
import '../css/scroller.css';
import DummyBox from "./dummybox";
const AnimeCard=lazy(()=>import('../components/animeCard'))



export default function Genre(props) {
    const [genreList, setGenre] = useState([])

    
    function getData() {
        
            fetch(`https://api.jikan.moe/v4/anime?q=&genres=${props.id}&sort=desc&limit=20`)
            .then(res=>{
                if(!res.ok){
                    throw Error("couldnot fetch details")
                }
                return res.json()
            }).then(response=>{
               setGenre(response.data)
            }).catch(err=>{
                console.log(err)
            })


    }
    useEffect(() => {
           setTimeout(function(){
            getData()
           },1000)


    }, [])
    return (
        <>
            {genreList.length>0 && <div className="w-full ">
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