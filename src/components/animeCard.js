import React from "react";
import '../css/scroller.css';
export default function AnimeCard({val}){
    let color=val.score>8?"Green":val.score>5?"orange":"red"
    const title=val.title
    return(
       <div className="item">
        <div className="img-bg" style={{backgroundImage:`url("${val.image_url}")`}}></div>
        <div className="info-box sm:px-3 sm:py-6 px-1 py-2">
            <p className="text-lg text-slate-700 font-semibold  w-full text-start">{title}</p>
           <div className="flex justify-evenly align-center">
           <button className="p-2 text-md sm:text-lg text-white  bg-slate-700 w-2/6 rounded-lg text-center shadow-lg shadow-slate-300">Click</button>
           <span style={{color:color}}className=" p-2  text-md sm:text-lg font-semibold">Score:{val.score}</span>
           </div>
        </div>
        
       </div>
    )
}