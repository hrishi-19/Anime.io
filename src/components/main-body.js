import React from "react";
import {Link} from 'react-router-dom';
export default function MainBody(){
    return(
        <div className="w-full">
            <div className="w-full  flex items-end justify-center h-screen bg-top  bg-no-repeat bg-cover " style={{backgroundImage:`url("/images/weathering-with-you.jpg")`}}>
                <button className="px-6 py-3 rounded md  bg-cyan-400 shadow-cyan-400 mb-6 text-lg text-white font-bold "><Link to='/home'>Home</Link></button>
            </div>
        
            
        </div>
    )
}