import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CardDetails = () => {
    const data = useLoaderData()
    
    const { name, brand, type, price, rating, photo, description } = data;
    const handleCart = () => {
        fetch('https://techies-server.vercel.app/myCart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
          try {
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Successfully added!',
                    'success'
                  )
            }
          } catch (error) {
            return Swal.fire("Warning", "This item is already in your Cart So please restart the server and try to add another product", "warning");

          }
        })
        
          
    }
    
    return (
      <div className="flex  md:px-32 px-2 py-32 justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-[250px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="">Short description: {description}</p>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                    <p>Type: {type}</p>
                    <p>Brand: {brand}</p>
                    
                    <div className="card-actions ">
                        <button onClick={handleCart} className="btn bg-gray-900 text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default CardDetails;