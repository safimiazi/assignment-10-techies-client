import { Rating } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const DetailsCard = ({ data }) => {
    const { name, brand, type, price, rating, photo, description, _id } = data;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Short description: {description.slice(0, 40)}</p>
                    <Rating value={parseInt(rating)}></Rating>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                    <p>Type: {type}</p>
                    <p>Brand: {brand}</p>

                    <div className="card-actions ">
                        <NavLink to={`/cardDetails/${_id}`}><button className="btn bg-gray-900 text-white">Details </button></NavLink>
                        <NavLink to={`/updateProduct/${_id}`}><button className="btn bg-gray-900 text-white">Update</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;