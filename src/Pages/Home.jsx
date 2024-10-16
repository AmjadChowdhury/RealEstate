import {  useEffect, useState } from "react";
import Estate from "./Estate";


const Home = () => {
    const [estates,setEstates] = useState([])
    useEffect(() => {
        fetch('estates.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-5">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;