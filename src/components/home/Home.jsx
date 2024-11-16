import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Service from "../service/Service";

const Home = () => {
    const services = useLoaderData();
    return (
        <section className="my-3 py-3">
           <Banner></Banner>
           <div className="grid md:grid-cols-4 gap-6 my-6">
            {
               services.slice(0 , 4).map(service => <Service key={service.id} service={service}></Service>) 
            }
           </div>
           <button className="btn text-center mx-auto block btn-accent w-32">Show more</button>

        </section>
    );
};

export default Home;