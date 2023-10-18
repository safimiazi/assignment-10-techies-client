import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../../Components/detailsCard/detailsCard";
import DetailsSlider from "../../Components/DetailsSlider/DetailsSlider";

const BrandDetails = () => {
    const { brand } = useParams();
    console.log(brand);
    const loadedData = useLoaderData();
    const filtered = loadedData.filter(data => data?.brand == brand);
    console.log(filtered);

    return (
        <div>
            <div>
                <DetailsSlider></DetailsSlider>
            </div>
            <div className=" py-32 md:px-32 px-2">
               <div>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    { 
                      filtered?.length > 0 ?  filtered.map(data => <DetailsCard
                            key={data._id}
                            data={data}
                        ></DetailsCard>) :
                        <div>
                            <p className="text-4xl">Not available item</p>
                        </div>
                    }
                </div>
               </div>
            </div>
        </div>
    );
};

export default BrandDetails;
