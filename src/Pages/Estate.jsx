import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-52">
          <img
            className="w-full h-full"
            src={image}
            alt="Residential"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold text-xl">
            {estate_title}
            <div className={`${status == 'sale' ? 'bg-blue-700' : 'bg-purple-700'} badge text-white`}>{status}</div>
          </h2>
          <p>{description}</p>
        </div>
        <div className="pl-8 pb-4">
            <Link to={`/estate/${id}`}><button className="btn bg-blue-700 text-white font-semibold">View Property</button></Link>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object,
};

export default Estate;
