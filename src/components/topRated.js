import { React, useState, useEffect } from "react";
import getTop from "../service/gettopList";
import'../css/scroller.css';
import TopRateCard from "./topCard";


export default function TopAnime() {
    const [topList, setTop] = useState([])
   
    const list = topList.map((top, index) => {
        return <TopRateCard val={top} key={index} />
    })
    useEffect(() => {
        getTop().then(topdata => {
            setTop(topdata.data)
        })


    }, [])

    return (
        <div className="w-full ">
            <div className="flex w-full flex-col px-5 py-6 ">
                <p className="text-2xl w-9/12 sm:w-6/12 text-slate-700 font-semibold px-2 py-3 border-b-2">Top Rated</p>
                <div className="wrapper ">
                    {list}
                </div>
            </div>
        </div>
    )
}