import {Globe} from "lucide-react";

const Navbar = () => {
    return (
    <div className="px-20 py-2 flex justify-between items-center">
        <div className="flex justify-between">
            <h3 className="text-2xl pr-10 text-grey-600 font-semibold">HushMeet</h3>
            <div className="flex ">
            <button className="border-l-2 pl-10 pr-2 text-gray-600">Pricing</button>
            <button className="px-2 text-gray-600">Home</button>
            <button className="px-2 text-gray-600">About Us</button>
            <button className="px-2 text-gray-600">Features</button>
            <button className="px-2 text-gray-600">Case Studies</button>
            </div>
        </div>
        <div className="flex gap-5">
            <div className="flex  items-center font-semibold text-[16px]"><Globe size="16"/>EN</div>
            <button className="rounded-full bg-black text-white px-3 py-2"> Get Started Free </button>
        </div>
    </div>
    )
}

export default Navbar;
