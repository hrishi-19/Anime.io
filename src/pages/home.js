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
                <Genre id={1} name={'Action'} time={1000}/>
            </Suspense>
            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={2} name={'Adventure'} time={2000} />
            </Suspense>
            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={10} name={'Fantasy'} time={3000}/>
            </Suspense>
            <Suspense fallback={<div className="w-full ">
                <div className="flex w-full flex-col px-5 py-6 ">
                    <div className="wrapper ">
                        <h1>Loading.....</h1>
                    </div>
                </div>
            </div>}>
                <Genre id={7} name={'Myserty'}time={4000}/>
            </Suspense>



        </>

    )
}
export default Home