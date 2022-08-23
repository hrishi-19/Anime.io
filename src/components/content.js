import React from "react";
import '../css/content.css'
import logo from '../img.jpg'
export default function Content(props){
    return(
        <div className="content-container">
          <div className="content-body">
          <div className="heading">{props.name}</div>
              
                <div className="desc">{props.desc}</div>
          </div>
        
            
        </div>
    )
}