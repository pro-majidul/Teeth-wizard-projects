import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const { cost, description, image, treatment } = useLoaderData();

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:`url(${image})`,
                backgroundPosition: 'center',
                backgroundSize : 'cover',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">{description}</p>
                    <button className="btn btn-primary">Book Appointmen</button>
                </div>
            </div>
        </div>
    );
};

export default Details;