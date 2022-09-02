import { React, useState, useEffect,lazy,Suspense} from "react";
import axios from "axios";
import '../css/scroller.css';
const AnimeCard=lazy(()=>import('../components/animeCard'))



export default function Genre(props) {
    const [genreList, setGenre] = useState([])

    
    async function getData() {
        return await axios.get(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${props.id}&order_by=popularity&sort=desc&limit=20`)
        .then((res) =>{
            
            if(res.status===200){
                return res.data
            }
            
        })

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
                        {
                            genreList.map((anime, index) => {
                                return <Suspense fallback={<h1>Loading...</h1>}>
                                    <AnimeCard id={anime.mal_id} img={anime.image_url} title={anime.title} score={anime.score} key={index} />
                                </Suspense>
                            })
                        }
                    </div>
                </div>
            </div>}
        </>
    )
}