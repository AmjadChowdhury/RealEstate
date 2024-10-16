import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Slider from "../Shared/Slider";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;