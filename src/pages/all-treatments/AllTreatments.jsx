import { useLoaderData } from "react-router-dom";
import Service from "../../components/service/Service";
import { useContext } from "react";
import { AuthProvider } from "../../provider/Provider";

const AllTreatments = () => {
    const services = useLoaderData()
    const {name} = useContext(AuthProvider);
    console.log(name);
    return (
        <div className="grid md:grid-cols-4 gap-5 my-5 py-3">
          {
            services.map(service => <Service key={service.id } service={service}></Service>)
          }
        </div>
    );
};

export default AllTreatments;