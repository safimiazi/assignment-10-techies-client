import { NavLink } from "react-router-dom";

const CardSection = ({data}) => {
    const {brand, photo} = data
    return (
        <div>
            <NavLink to={`/brandDetails/${brand}`}>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="viv0" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brand}</h2>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

export default CardSection;