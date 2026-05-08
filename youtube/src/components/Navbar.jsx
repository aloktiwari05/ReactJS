import { Menu, Search, Mic, Plus, Bell,} from "lucide-react"

const Navbar = () => {
    return (
        <div className="px-5 w-screen flex items-center justify-between">

            <div className="flex items-center gap-4">
                <Menu stroke="white" />
                <div className="flex items-center gap-1 text-white font-semibold text-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                    </svg>
                    Wetube
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="h-10 w-100 flex items-center justify-between border rounded-full border-gray-600">
                    <input type="text" value="Search" className="pl-4 w-90 h-10 rounded-r-none rounded-l-full font-semibold  text-gray-500" />
                    <Search size={24} stroke="gray" className="w-15 h-10 border rounded-r-full bg-gray-700 border-gray-600 px-4" />
                </div>
                <Mic size={24} stroke="gray" className="h-10 w-10 border rounded-full border-gray-600 p-2 " />
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center justify-center gap-1 px-1 py-1 border border-gray-600 rounded-full">
                    <Plus stroke="white" />
                    <div className="text-white pr-2">Create</div>
                </div>
                <Bell stroke="white" size={26} />
                <div className="flex items-center justify-center bg-pink-400 h-8 w-8 mr-5 border border-gray-600 rounded-full">A</div>
            </div>
        </div>
    );
}

export default Navbar;