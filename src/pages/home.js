import { React, lazy, Suspense } from "react";
import Search from "../components/searchBar";
import TopAnime from "../components/topRated";
import '../css/scroller.css';
const Genre = lazy(() => import('../components/genre'))



function Home() {

    return (
        <>
            <Search />
            <TopAnime />


            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={1} name={'Action'} />
            </Suspense>
            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={2} name={'Adventure'} />
            </Suspense>
            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={10} name={'Fantasy'} />
            </Suspense>
            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={7} name={'Myserty'} />
            </Suspense>



        </>

    )
}
export default Home