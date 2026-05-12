import Footer from "./components/Footer.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";

const App = () => {
  return (
    <div className="w-full h-screen bg-black overflow-x-hidden">
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}

export default App;