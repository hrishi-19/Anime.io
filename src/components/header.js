import React from "react";
export default function Header(props){
    return(
        <div className="w-full flex bg-white shadow-lg shadow-slate-300 fixed top-0 left-0">
            <header className="w-full">
            <nav className="w-full h-full p-3 flex ">
            <div className=" w-full sm:w-6/12 flex items-center ">
                <p className=" text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">Anime.io</p>
                <h4 className="px-3 text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">{`アニメ`}</h4>
            </div>
           {props.show &&  <div className="w-6/12  h-full hidden sm:block  ">
                <input  className =" text-lg p-3 outline-none w-9/12 "type="text" placeholder="Search...."/>
            </div>}
            </nav>
            </header>
        </div>
    )
}