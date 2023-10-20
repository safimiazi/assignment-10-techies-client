import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const data = useLoaderData()
    console.log(data);
    const {name,brand, type, price, rating, photo, description, _id} = data
    
    const handleUpdate = e => {
        e.preventDefault()
    const name = e.target.name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const photo = e.target.photo.value;
  
    const brand = e.target.brand.value;
    console.log(name,brand, type, price, rating, photo);
    const product = {name,brand, type, price, rating, photo}
        fetch(`https://techies-server.vercel.app/brandDetails/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    
    return (
        <div className="md:px-32 px-4 py-32">
            <div>
                <h1 className="text-3xl mb-3 text-center">Update product</h1>
            </div>
            <div>
                <form onSubmit={handleUpdate} className="hello p-10 bg-gray-700 rounded">
                    <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
                        <div>
                            <label className="text-white">Name:</label>
                            <input defaultValue={name} className="py-1 pl-2 w-full" type="text"  placeholder="Enter product name" name="name" id="" />
                        </div>
                        <div>
                            <label className="text-white">brand:</label>
                            <input defaultValue={brand} className="py-1 pl-2 w-full" type="text"  placeholder="Enter brand" name="brand" id="" />
                        </div>
                        <div>
                            <label className="text-white">Type:</label>
                            <input defaultValue={type} className="py-1 pl-2 w-full" type="text" placeholder="Enter Type" name="type" id="" />
                        </div>
                        <div>
                            <label className="text-white">Price:</label>
                            <input defaultValue={price} className="py-1 pl-2 w-full" type="text"  placeholder="Enter Price" name="price" id="" />
                        </div>
                        <div>
                            <label className="text-white">rating:</label>
                            <input defaultValue={rating} className="py-1 pl-2 w-full" type="text"  placeholder="Enter Rating" name="rating" id="" />
                        </div>

                    </div>
                    <div>
                        <div className="mt-5">
                            <label className="text-white">photo:</label>
                            <input defaultValue={photo} className="py-1 pl-2 w-full" type="text" placeholder="Enter product photo" name="photo" id="" />
                        </div>
                    </div>
                   
                    <div className="mt-8">
                        <input className="py-1 bg-gray-900 text-white w-full btn" type="submit" value="Update product" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default UpdateProduct;