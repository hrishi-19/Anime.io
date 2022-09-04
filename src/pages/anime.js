import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import AnimeCard from "../components/animeCard";

export default function AnimePage() {
    const navigate=useNavigate()
    const params = useParams()
    const [animeDetails, setDeatils] = useState({
        release_date:"",
        title: "",
        image_url:"",
        japanese_title: "",
        synopsis: "",
        genres: [],
        episodes:0,
        rating:"",
        rank:0,
    })
    const[recommendations,setRecommend]=useState([])

    const recommendArray= recommendations.map((tile, index) => {
        return <AnimeCard id={tile.mal_id} img={tile.image_url} title={tile.title} score={undefined} key={index} />
        
    })
  
    async function getData() {
        return await axios.get(`https://api.jikan.moe/v4/anime/${params.mal_id}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data
                }if(res.status===429) {
                   setTimeout(()=>{
                        return getData()
                   },4000)
                }
            }).catch((err) => console.log(err))

    }
    async function gerRecommendations() {
        return await axios.get(`https://api.jikan.moe/v4/anime/${params.mal_id}/recommendations`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data
                } else {
                    console.log(res.status)
                }
            }).catch((err) => console.log(err))

    }
    useEffect(() => {
        getData().then((animeData) => {
            const genres=animeData.data.genres.map((genre)=>{
                return genre.name
            })
            setDeatils(() => {

                return {
                    release_date:animeData.data.aired.string,
                    title: animeData.data.title,
                    japanese_title: animeData.data.title_japanese,
                    genres: genres,
                    image_url:animeData.data.images.jpg.large_image_url,
                    episodes:animeData.data.episodes,
                    rating:animeData.data.rating,
                    rank:animeData.data.rank,
                    synopsis:animeData.data.synopsis
                }
            }



            )
        }).then(
           setTimeout(()=>{
            gerRecommendations().then(res=>{
                setRecommend(()=>{
                    const imageArray= res.data.map((val)=>{
                        return {
                            mal_id:val.entry.mal_id,
                            title:val.entry.title,
                            image_url:val.entry.images.jpg.image_url
                        }
                    })
                    return imageArray
                })
               
                
                
            })
           },3000)
        ).then(
            window.scrollTo(0, 0)
        )
       
       
    },[params.mal_id])


    


    return (
        <>  <div className="flex ml-2 px-2 py-2 mt-14">
                 <button  onClick={()=>navigate(-1) }className="p-2 mr-6 text-md sm:text-lg text-white  bg-slate-700  rounded-lg text-center shadow-lg shadow-slate-300">
            Back
            </button>
            <button  onClick={()=>navigate(`/home`)} className="p-2 text-md sm:text-lg text-white  bg-slate-700  rounded-lg text-center shadow-lg shadow-slate-300">
            Home
            </button>
            </div>
            <div className="w-full  relative top-6 sm:top-20 px-2  sm:px-6 py-5">
                <h1 className="text-slate-500 font-semibold text-md sm:text-2xl">{animeDetails.title} {animeDetails.title_japanese}</h1>
                <div className="w-full pt-6 flex-col sm:flex-row flex items-center justify-between">
                    <div className="p-2 w-full sm:w-2/6 flex items-center justify-center">
                            <img src={animeDetails.image_url} alt={animeDetails.title}loading="lazy"/>
                    </div>
                    <div className="p-3 w-full sm:w-3/6 text-slate-500 font-semibold text-md sm:text-2xl leading-10 tracking-wide ">
                        <div className="w-full flex flex-col sm:flex-row ">
                        <p>Title:</p>
                        <p>
                            {animeDetails.title} {animeDetails.japanese_title}
                        </p>
                        </div>
                        <p className="w-full pt-3 sm:pt-6">Release Date: {animeDetails.release_date}</p>
                        <p className="w-full pt-3 sm:pt-6">Episodes: {animeDetails.episodes}</p>
                        <p className="w-full pt-3 sm:pt-6">Rank: {animeDetails.rank}</p>
                        <p className="w-full pt-3 sm:pt-6">Rating: {animeDetails.rating}</p>
                        <div className="flex flex-wrap px-2 items-center pt-6">
                            Genres:
                            {
                                animeDetails.genres.map((item,index)=>{
                                    return  <span className="p-2 mx-2 mt-3 text-md sm:text-lg text-white  bg-slate-700  rounded-lg text-center shadow-lg shadow-slate-300">{item} </span>
                                })
                            }
                        </div>
                        



                    </div>
                    

                </div>
                <p className="w-full pt-6 text-slate-500 font-semibold text-md sm:text-2xl leading-6 ">
                            {animeDetails.synopsis}
                </p>

            </div>
           <div className="w-full mt-12">
                <div className="flex w-full flex-col px-5 py-6 text-slate-700 font-semibold">
                    <p className="text-2xl w-9/12 sm:w-6/12  px-2 py-3 border-b-2">Recommendation</p>
                    <div className="wrapper ">
                    {recommendations.length>0?recommendArray.slice(0,5):<h1>No Recommendations..</h1>}
                    </div>
                </div>
            </div>
        </>


    )



}