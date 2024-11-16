
// eslint-disable-next-line react/prop-types
const Service = ({ service }) => {
  const {cost ,description , image, treatment} = service || {}
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">${cost}</div>
                </h2>
                <p>{description.slice(0,150)}....</p>
                <div className="card-actions justify-end">
                    <button className=" btn btn-success hover:btn-neutral">Checkout More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;