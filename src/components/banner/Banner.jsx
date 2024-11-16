import bgImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className="hero px-12 bg-base-200 min-h-[calc(90vh-232px)]">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <div className='max-w-md'>
                <img
                    src={bgImg}
                    className=" w-full rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="md:text-5xl text-xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;