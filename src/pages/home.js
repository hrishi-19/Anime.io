import { React,lazy,Suspense } from "react";
import Search from "../components/searchBar";
import TopAnime from "../components/topRated";
import '../css/scroller.css';
const Genre=lazy(()=>import('../components/genre'))



function Home() {
    const genres = [
        {
            id: 1,
            name: "Action"
        },
        {
            id: 2,
            name: "Adventure"
        },
        {
            id: 10,
            name: "Fantasy"
        },
        {
            id: 7,
            name: "Myserty"
        },
       
    ]

    return (
        <>
            <Search />
            <TopAnime />
           {
             genres.map((genre, index) => {
                return <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                    <Genre key={index} id={genre.id} name={genre.name}/>
                    </Suspense> 
            })
           }
           
        </>

    )
}
export default Home