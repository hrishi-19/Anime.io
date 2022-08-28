import React from "react";
import '../css/scroller.css';
export default function TopCard({val}){

    let title=val.title
    return(
       <div className="item">
        <div className="img-bg" style={{backgroundImage:`url(${val.images.webp.large_image_url})`}}></div>
        <div className="info-box sm:px-3 sm:py-6 px-1 py-2">
            <p className="text-lg text-slate-700 font-semibold  w-full text-start">{title}</p>
           <div className="flex justify-between align-center">
           <button className="p-2 text-md sm:text-lg text-white  bg-slate-700 w-2/6 rounded-lg text-center shadow-lg shadow-slate-300">Click</button>
           <span className=" p-2 text-green-500 text-md sm:text-lg font-semibold">Score:{val.score}</span>
           </div>
        </div>
        
       </div>
    )
}