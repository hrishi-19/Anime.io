import React from "react";
import "../css/scroller.css";
export default function DummyBox(){
    return(
       
        <div className="item">
        <div className="img-bg" style={{backgroundColor:"gray"}}></div>
        <div className="info-box sm:px-3 sm:py-6 px-1 py-2">
            <p className="text-lg text-slate-700 font-semibold  w-full text-start"></p>
           <div className="flex justify-between align-center">
           <button  className="p-2 text-md sm:text-lg text-white  bg-slate-700 w-2/6 rounded-lg text-center shadow-lg shadow-slate-300">
            Check
            </button>
           </div>
        </div>
        
       </div>
       
    )
}