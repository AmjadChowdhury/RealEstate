import { useLoaderData, useParams } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const EstateDetails = () => {
  const estateDetails = useLoaderData();
  const { esId } = useParams();
  // console.log(typeof estateDetails[0].id,typeof esId)
  const estateFind = estateDetails.find(
    (estate) => estate.id == parseInt(esId)
  );
  console.log(estateFind);
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
  } = estateFind;
  return (
    <div className="lg:w-1/2 mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-52">
          <img className="w-full h-full" src={image} alt="Residential" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold text-xl text-blue-700">
            {estate_title}
          </h2>
          <p className="text-xl font-semibold">{description}</p>
          <p className="text-xl font-bold flex items-center">Price : <MdAttachMoney className="text-xl"></MdAttachMoney><span className="font-extrabold">{price}</span></p>
          <p className="text-xl font-bold flex items-center">Area : <span className="font-extrabold mr-1">{area}</span> sq ft</p>
          <p className="text-xl font-bold flex items-center"><IoLocationOutline className="text-xl mr-1"></IoLocationOutline><span className="font-extrabold mr-1">{location}</span></p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {
                facilities.map(fac => <p className="font-semibold border-2 p-2 rounded-lg bg-[#0000ffAC] text-white">{fac}</p>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
