import { React } from "react";
import Genre from "../components/genre";
import Search from "../components/searchBar";
import TopAnime from "../components/topRated";
import '../css/scroller.css';



function Home() {
    const genres = [
        {
            id: 42,
            name: "Seinen"
        },
        {
            id: 1,
            name: "Action"
        },
        {
            id: 2,
            name: "Adventure"
        },
        {
            id: 27,
            name: "Shoumen"
        },
        {
            id: 22,
            name: "Romance"
        },
        {
            id: 10,
            name: "Fantasy"
        },
        {
            id: 7,
            name: "Myserty"
        },
        {
            id: 36,
            name: "Slice of life"
        },
    ]
    const genreType = genres.map((genre, index) => {
        return <Genre key={index} id={genre.id} name={genre.name} />
    })

    return (
        <>
            <Search />
            <TopAnime />
            {genreType}
        </>

    )
}
export default Home