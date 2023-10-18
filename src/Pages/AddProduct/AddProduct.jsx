
const AddProduct = () => {
const handleAddProduct = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const photo = e.target.photo.value;
    const description = e.target.description.value;
    const brand = e.target.brand.value;
    console.log(name,brand, type, price, rating, photo, description);
    const product = {name,brand, type, price, rating, photo, description}
    const brands = {brand, photo}
    console.log(brands);

    // //add brand for home page page brand card section
    // fetch('http://localhost:5000/brands',{
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(brands)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })


    // for brandDetailsCollection 
    fetch('http://localhost:5000/brandDetails',{
        method: 'POST',
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
            <h1 className="text-3xl mb-3 text-center">add product</h1>
        </div>
        <div>
            <form onSubmit={handleAddProduct} className="hello p-10 bg-gray-700 rounded">
                <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
                    <div>
                        <label className="text-white">Name:</label>
                        <input className="py-1 pl-2 w-full" type="text"  placeholder="Enter product name" name="name" id="" />
                    </div>
                    <div>
                        <label className="text-white">Brand Name:</label>
                        <input className="py-1 pl-2 w-full" type="text" placeholder="Enter Brand" name="brand" id="" />
                    </div>
                    <div>
                        <label className="text-white">Type:</label>
                        <input className="py-1 pl-2 w-full" type="text" placeholder="Enter Type" name="type" id="" />
                    </div>
                    <div>
                        <label className="text-white">Price:</label>
                        <input className="py-1 pl-2 w-full" type="text"  placeholder="Enter Price" name="price" id="" />
                    </div>
                    <div>
                        <label className="text-white">rating:</label>
                        <input className="py-1 pl-2 w-full" type="text"  placeholder="Enter Rating" name="rating" id="" />
                    </div>

                </div>
                <div>
                    <div className="mt-5">
                        <label className="text-white">photo:</label>
                        <input className="py-1 pl-2 w-full" type="text" placeholder="Enter product photo" name="photo" id="" />
                    </div>
                </div>
                <div className="mt-5">
                    <label className="text-white">Short description:</label>
                    <textarea className="py-1 pl-2 w-full" placeholder="short description" type="text" name="description" id="" />
                </div>
                <div className="mt-8">
                    <input className="py-1 bg-gray-900 text-white w-full btn" type="submit" value="add product" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddProduct;