import React from "react";
export default function Header(){
    return(
        <div className="w-full flex bg-black fixed top-0 left-0">
            <header className="w-full">
            <nav className="w-full h-full p-3">
            <div className="w-full flex items-center text-fuchsia-500">
                <p className=" text-3xl font-bold">Anime.io</p>
                <h4 className="px-3 text-xl">{`アニメ`}</h4>
            </div>
            </nav>
            </header>
        </div>
    )
}