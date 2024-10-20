import {  useEffect, useState } from "react";
import Estate from "./Estate";
import Slider from "../Shared/Slider"


const Home = () => {
    const [estates,setEstates] = useState([])
    const [showSize,setShowSize] = useState(5)
    useEffect(() => {
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])

    const handleShowAll = () => {
        setShowSize(estates.length)
    }
    return (
        <div>
            <Slider></Slider>
            <div className="my-4 flex justify-center">
               <span className="text-3xl font-extrabold text-blue-700 border-b-4 border-b-blue-950 rounded-b-lg">Residential</span>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
                {
                    estates.slice(0,showSize).map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
            <div className={`flex justify-center my-4 ${estates.length == showSize ? 'hidden' : ''}`}>
                <button className="btn bg-purple-700 text-white" onClick={handleShowAll}>Show All</button>
            </div>
        </div>
    );
};

export default Home;