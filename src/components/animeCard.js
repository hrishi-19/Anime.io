import React from "react";
import axios from "axios";
import '../css/scroller.css';
export default function AnimeCard(props){
    let color=props.score>8?"Green":props.score>5?"orange":"red"
    const handleClick=()=>{
        const getdata=axios.get(`https://api.jikan.moe/v4/anime/${props.id}`)
        getdata.then(res=>
            console.log(res.data.data))
    }
    return(
       <div className="item">
        <div className="img-bg" style={{backgroundImage:`url(${props.img} )`}}></div>
        <div className="info-box sm:px-3 sm:py-6 px-1 py-2">
            <p className="text-lg text-slate-700 font-semibold  w-full text-start">{(props.title.length<50)?props.title:props.title.slice(0,50)+".."}</p>
           <div className="flex justify-between align-center">
           <button  onClick={handleClick} className="p-2 text-md sm:text-lg text-white  bg-slate-700 w-2/6 rounded-lg text-center shadow-lg shadow-slate-300">Click</button>
           <span style={{color:color}}className=" p-2  text-md sm:text-lg font-semibold">Score:{props.score}</span>
           </div>
        </div>
        
       </div>
    )
}