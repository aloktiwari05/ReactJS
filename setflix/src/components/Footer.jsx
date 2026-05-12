const Footer = () => {
  return (
    <div className="h-full flex flex-col gap-10 mx-40 text-gray-300">

      <div>Questions? Call <u>000-800-919-1743</u></div>

      <div className="flex gap-60">

        <div className="flex flex-col justify-center">
          <a href="">FAQ</a>
          <a href="">Media Centre</a>
          <a href="">Ways to Watch</a>
          <a href="">Cookie Preferences</a>
          <a href="">Speed Test</a>
        </div>

        <div className="flex flex-col justify-center">
          <a href="">Help Centre</a>
          <a href="">Investor Relations</a>
          <a href="">Terms of Use</a>
          <a href="">Corporate Information</a>
          <a href="">Legal Notices</a>
        </div>

        <div className="flex flex-col justify-center">
          <a href="">Account</a>
          <a href="">Jobs</a>
          <a href="">Privacy</a>
          <a href="">Contact Us</a>
          <a href="">Only on Setflix</a>
        </div>

      </div>

      <div>
        <select className="bg-[#181818] border border-gray-600 rounded font-semibold text-white px-2 py-1" type="dropdown" name="language">
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="Hindi">Hindi</option>
          <option value="Japanese">Japanese</option>
          <option value="Spanish">Spanish</option>
        </select>
      </div>

      <h3>
        Netflix India
      </h3>

      <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    </div>
  )
}

export default Footer;