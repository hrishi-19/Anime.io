import { React, useState, useEffect } from "react";
import Header from '../components/header';
import TopCard from "../components/topCard";
import '../css/scroller.css';
import getGenre from "../service/getGenre";
import getTop from "../service/gettopList";

function Home() {
    const [topList, setTop] = useState([])
    const[genre,setGenre]=useState([])
    const list=topList.map((top,index)=>{
        return <TopCard val={top}key={index}/>
    })
    useEffect(() => {
        getTop().then(topdata=>{
            setTop(topdata.data)
        })


    }, [])
   
    

    return (
        <>
            <Header/>
            <div className="w-full pt-9  ">
            <div className="flex flex-col px-5 py-3 ">
                <p className="text-2xl w-6/12  text-slate-700 font-semibold px-2 py-3 border-b-2">Top Anime</p>
                <div className=" wrapper">
               {list}
                </div>
            </div>
            </div>
            <div className="w-full pt-9  ">
            <div className="flex flex-col px-5 py-3 ">
                <p className="text-2xl w-6/12  text-slate-700 font-semibold px-2 py-3 border-b-2">Genre</p>
                <div className=" wrapper">
               
                </div>
            </div>
            </div>
           
            

        </>

    )
}
export default Home