import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Slider from "../Shared/Slider";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;