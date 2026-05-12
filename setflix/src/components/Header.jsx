const Header = () => {
  return (
    <div className="mx-40 h-20 flex justify-between items-center">
      <div className="text-[#E50914] font-semibold text-4xl  mr-16">Setflix</div>

      <div className="flex justify-between items-center gap-4">
        <select className="bg-[#181818] border border-gray-600 rounded font-semibold text-white px-2 py-1" type="dropdown" name="language">
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Hindi">Hindi</option>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
        </select>
        <button className="bg-[#FF0000] rounded text-white px-3 py-1 font-semibold">Sign In</button>
      </div>
    </div>
  )
}

export default Header;