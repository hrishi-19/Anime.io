import {React } from "react";


export default function Header(){
    
    return(
        <div className="w-full flex z-10  bg-white shadow-sm shadow-slate-300 fixed top-0 left-0">
            <header className="w-full">
            <nav className="w-full h-full p-2 flex ">
            <div className=" w-full sm:w-6/12 flex items-center ">
                <p className=" text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">Anime.io</p>
                <h4 className="px-3 text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">{`アニメ`}</h4>
            </div>
            </nav>
            </header>
        </div>
    )
}