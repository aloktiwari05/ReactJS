import Header from "./components/Header.jsx";
import Center from "./components/Center.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-black overflow-hidden">
      <Header />
      <Center />
      <Footer />
    </div>
  )
}

export default App;