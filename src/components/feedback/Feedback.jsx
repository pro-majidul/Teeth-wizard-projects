
// eslint-disable-next-line no-unused-vars, react/prop-types
const Feedback = ({ feedback }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { review, reviewId, userImg, name } = feedback
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className="card-body">
                <div className="flex items-center gap-2">
                    <img className="w-12 h-12 rounded-full"
                        src={userImg}
                        alt="Shoes" />
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-right">date : {new Date().toLocaleDateString()}</p>
                </div>
                <p>{review}</p>
                <div className="card-actions items-center justify-end">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;