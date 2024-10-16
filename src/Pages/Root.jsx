import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <div className="p-1 md:p-4">
              <Navbar></Navbar>
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;