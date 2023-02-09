import { React, useState, useEffect} from "react";
import '../css/scroller.css';
import DummyBox from "./dummybox";
import AnimeCard from "./animeCard";



export default function Genre(props) {
    const [genreList, setGenre] = useState(null)

    
    function getData() {
        
            fetch(`https://api.jikan.moe/v4/anime?q=genres=${props.id}&sort=asc&limit=15`)
            .then(res=>{
                if(!res.ok){
                    throw Error("couldnot fetch details")
                }
                return res.json()
            }).then(response=>{
                
                const sortedArray=response.data.sort((a,b)=>b.score-a.score)
               setGenre(sortedArray)
            }).catch(err=>{
                console.log(err)
            })


    }
    useEffect(() => {
           setTimeout(function(){
            getData()
           },props.time)


    }, [])
    return (
        <>
            {<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <p className="text-2xl w-9/12 sm:w-6/12 text-slate-700 font-semibold px-2 py-3 border-b-2">{props.name}</p>
                    <div className="wrapper ">
                        {genreList&&
                            genreList.map((anime, index) => {
                                return  <AnimeCard id={anime.mal_id} img={anime.images.jpg.image_url} title={anime.title} score={anime.score} key={anime.mal_id} />
                                   
                                
                            })
                        }
                        {!genreList && [1,2,3,4,5].map(n=><DummyBox key={n}/>)}
                    </div>
                </div>
            </div>}
        </>
    )
}