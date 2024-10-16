import { useLoaderData } from "react-router-dom";
import Category from "./Category";
// import Category from "./Category";


const Categories = () => {
    const categories = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 p-1 md:p-5">
                {
                    categories.map((cat,idx) => <Category key={idx} cat={cat}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;