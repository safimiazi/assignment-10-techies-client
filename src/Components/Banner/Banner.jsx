
const Banner = () => {
    return (
        <div className="hero min-h-screen relative" style={{ backgroundImage: 'url("https://i.ibb.co/0YDmwX7/forbanner.webp")' }}>
            <div className="bg-black absolute inset-0 bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:mr-20">
                    <button className="btn bg-gray-900 text-white hover:bg-gray-900">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;