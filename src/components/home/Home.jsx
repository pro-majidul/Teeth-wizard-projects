import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Service from "../service/Service";
import Feedback from "../feedback/Feedback";

const Home = () => {
    const services = useLoaderData();
    const { serviceData, feedbackData } = services;
    console.log(feedbackData);
    return (
        <section className="my-3 py-3">
            <Banner></Banner>
            <h3 className="text-3xl font-bold my-3 py-2 underline underline-offset-8 text-orange-600">Services</h3>
            <div className="grid md:grid-cols-4 gap-6 my-6">
                {
                    serviceData.slice(0, 4).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <button className="btn  mx-auto block btn-accent w-32 ">
                <NavLink to='/teatments' >Show more </NavLink>
            </button>
                <p className="text-3xl font-bold my-3 py-2 underline underline-offset-8 text-green-600">Client Review</p>
            <div className="grid md:grid-cols-3 gap-6 my-6">
                {
                    feedbackData.map(feed => <Feedback key={feed.id} feedback={feed}></Feedback>)
                }
            </div>

        </section>
    );
};

export default Home;