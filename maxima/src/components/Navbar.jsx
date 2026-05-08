const Navbar = () => {
    return (
    <div className="px-20 py-2 flex justify-between items-center">
        <div className="flex gap-5">
            <h3 className="text-2xl text-grey-600 font-semibold">maxima</h3>
            <button>Home</button>
            <button>Our Team</button>
            <button>Contact</button>
        </div>
        <div className="flex gap-5">
            <button className="">Send Us an Email</button>
            <button className="rounded-full bg-white px-3 py-2">Book a Demo </button>
        </div>
    </div>
    )
}

export default Navbar;
