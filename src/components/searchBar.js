import {React,useState,useEffect} from "react";
export default function Search(props){
    const[anime_name,setName]=useState('')
    const[click,setClick]=useState(false)
    const[animeInfo,setinfo]=useState(null)
    function handleChange(e){
        setName(e.target.value)
    }
    function handleClick(){
        setClick(val=>!val)
    }
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/anime?q=naruto&limit=15}').then(res=>{
            return res.json()
        }).then(response=>{
            setinfo(response.data)
        })
    },[click])
   console.log(click)
   console.log(animeInfo)
    return(
            <div>
           {props.show &&  <div className="w-6/12  h-full hidden sm:flex   ">
                <input onChange={handleChange} className =" text-lg p-3 outline-none w-9/12 "type="text" placeholder="Search...."/>
                <button  onClick={handleClick}className="w-1/6 h-6/12 border-2  rounded-xl border-slate-400 hover:shadow-md shadow-slate-400 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">Search</button>
            </div>}
            
           
        </div>
    )
}
