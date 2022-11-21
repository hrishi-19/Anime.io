import React from "react";
import "../css/scroller.css";
export default function DummyBox() {
    return (

        <div className="dummyBox bg-slate-500/30 ml-5 ">
            <div className="dummy-img bg-slate-500/20 w-full h-3/5"></div>
            <div className="dummy-content w-full h-2/5 py-5 px-3 flex flex-col justify-between">
                <p className="p-3 bg-slate-500/30"></p>
                <div className="w-full  h-1/3 flex justify-between items-center">

                <div className="bg-slate-500/30 w-20 h-12 rounded-lg"></div>
                <p className="bg-slate-500/30 h-10 w-20"></p>

                </div>

            </div>


        </div>

    )
}