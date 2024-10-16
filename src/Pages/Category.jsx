import PropTypes from "prop-types";

const Category = ({cat}) => {
    const { category,description } = cat
    return (
        <div className="bg-[#0000ff12] p-4 rounded-lg border-b-4 border-b-blue-700">
            <h1 className="text-2xl text-blue-700 font-bold text-center mb-2 uppercase">{category}</h1>
            <p className="text-xl font-semibold">{description}</p>
           
        </div>
    );
};

Category.propTypes = {
    cat : PropTypes.object
}

export default Category;