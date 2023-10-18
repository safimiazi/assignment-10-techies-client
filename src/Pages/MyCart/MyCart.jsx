import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data.map( singleData => <tr key={singleData._id} className="bg-base-200">
        <th>{singleData._id}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      )
      }
    </tbody>
  </table>
</div>
    );
};

export default MyCart;