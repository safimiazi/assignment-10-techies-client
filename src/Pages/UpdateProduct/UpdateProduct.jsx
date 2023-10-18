
const UpdateProduct = () => {
    return (
        <div className="md:px-32 px-4 py-32">
            <div>
                <h1 className="text-3xl mb-3 text-center">Update product</h1>
            </div>
            <div>
                <form className="hello p-10 bg-gray-700 rounded">
                    <div className="grid md:grid-cols-2  grid-cols-1 gap-4">
                        <div>
                            <label className="text-white">Name:</label>
                            <input className="py-1 pl-2 w-full" type="text"  placeholder="Enter product name" name="name" id="" />
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
                        <input className="py-1 bg-gray-900 text-white w-full btn" type="submit" value="Update product" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default UpdateProduct;