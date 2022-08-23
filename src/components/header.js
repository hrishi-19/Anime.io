import React from "react";
import '../css/header.css'
export default function Header(){
    return(
        <div className="header-main">
            <header className="header">
            <nav className="navigation-bar">
            <div className="nav-item">
                <p>Anime.io</p>
                <h4>{`アニメ`}</h4>
            </div>
            </nav>
            </header>
        </div>
    )
}