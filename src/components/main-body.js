import React from "react";
export default function MainBody(){
    return(
        <div className="w-full bg-black">
            <div className="w-full  flex items-end justify-center h-screen bg-center bg-no-repeat bg-contain " style={{backgroundImage:`url("/images/anime-bg.jpg")`}}>
                <button className="px-6 py-3 rounded md  bg-cyan-400 shadow-cyan-400 mb-6 text-lg text-white font-bold ">Home</button>
            </div>
        
            
        </div>
    )
}