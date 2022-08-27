import React from "react";
export default function Navigation(){

    return(
        <>
        <div className="  mx-15 h-screen hidden sm:block md:w-2/12 bg-white  shadow-lg  shadow-slate-500">
            <div className="py-15 px-3 w-full h-full flex flex-col align-center justify-center">
                <p className=" w-full md:p-2 text-lg sm:text-2xl uppercase  text-slate-500 tracking-widest leading-10  font-bold">Categories</p>
                <ul className="mt-9 p-5 w-full  flex align-center justify-evenly flex-col font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ">
                    <li className=" w-full text-2xl text-center px-3 py-6  ">Action</li>
                    <li className=" w-full text-2xl text-center px-3 py-6">Action</li>
                    <li className=" w-full text-2xl text-center px-3 py-6">Action</li>
                    <li className=" w-full text-2xl text-center px-3 py-6">Action</li>
                    <li className=" w-full text-2xl text-center px-3 py-6">Action</li>
                </ul>
            </div>
                
        </div>
        </>

    )
}