import {  useEffect, useState } from "react";
import Estate from "./Estate";
import Slider from "../Shared/Slider"


const Home = () => {
    const [estates,setEstates] = useState([])
    useEffect(() => {
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    return (
        <div>
            <Slider></Slider>
            <div className="grid lg:grid-cols-3 gap-5">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;