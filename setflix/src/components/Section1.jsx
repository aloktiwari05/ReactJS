import Header from "./Header.jsx";

const Section1 = () => {
    return (
        <div className="border-b-10 relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_large.jpg" alt="Netflix Background" />
            

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 min-h-screen flex flex-col">
                <Header />

                <div className="flex flex-col items-center gap-6 mt-40 px-6 text-white text-center">

                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-5xl leading-tight">
                            Unlimited movies, TV <br /> shows, and more
                        </h1>

                        <p className="text-lg font-semibold">
                            Starts at ₹149. Cancel at any time.
                        </p>
                    </div>

                    <h3 className="text-lg">
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>

                    <div className="flex w-full max-w-2xl gap-2">
                        <input type="text" placeholder="Email address" className="flex-1 bg-[#121212] border border-gray-500 px-5 py-4 rounded text-white" />

                        <button className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded text-lg font-semibold">
                            Get Started
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Section1;