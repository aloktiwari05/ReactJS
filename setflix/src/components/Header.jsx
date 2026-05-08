const Header = () => {
  return (
    <div className="mx-15 h-20 flex justify-between items-center bg-orange-300">
      <div className="text-[#E50914] font-semibold text-2xl  mr-16">Setflix</div>
      
      <div>
      <select type="dropdown" name="language">
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Hindi">Hindi</option>
        <option value="Japanese">Japanese</option>
        <option value="Spanish">Spanish</option>
      </select>
      <button>Sign In</button>
      </div>
    </div>
  )
}

export default Header;