import React from "react";
export default function Content(props) {
  return (
    <div className="w-full py-6 sm:py-10">
      <div className="w-full  tracking-wider leading-10 py-6 px-2 flex flex-col items-center justify-between">
        <div className="p-3 sm:p-6  border-b-8 border-blue-700 font-bold ">
          <span className=" text-3xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{props.name}</span>
          </div>

        <div className="p-6 text-white text-xl sm:text-2xl  w-full sm:w-8/12 text-justify ">{props.desc}</div>
      </div>


    </div>
  )
}