import { React} from "react";
import Search from "../components/searchBar";
import TopAnime from "../components/topRated";
import '../css/scroller.css';


function Home() {

    return (
        <>
            <Search/>
            <TopAnime />
        </>

    )
}
export default Home