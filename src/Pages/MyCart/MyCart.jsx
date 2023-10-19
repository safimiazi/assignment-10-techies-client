import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    const [tableData, setTableData] = useState(loadedData)

    const handleDelete = (_id) => {
        Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted",data);
            if(data.deletedCount){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
      
            }
            const remaining = tableData.filter(data => data._id !== _id)
            setTableData(remaining)
          });
       
      }
    });
        

    }
    return (
        <div className="overflow-x-auto py-32 md:px-32 border">
            <table className="table border border-black rounded">
                {/* head */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Mobile Name</th>
                        <th>Brand Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        tableData.map(singleData => <tr key={singleData._id} className="bg-base-200">
                            <th>{singleData._id}</th>
                            <td>{singleData.name}</td>
                            <td>{singleData.brand}</td>
                            <td><button onClick={()=>handleDelete(singleData._id)} className="btn">X</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyCart;