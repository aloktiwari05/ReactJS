import Navbar from "./components/Navbar.jsx"
import Menu from "./components/Menu.jsx"
import Center from "./components/Center.jsx"

const App = () => {
  return (
    <div className="h-screen w-full grid grid-rows-[50px_1fr] grid-rows overflow-hidden">
      <Navbar/>
      <div className="grid grid-cols-[200px_1fr]">
        <Menu className="col-span-2" />
        <Center className="col-span-10" />
      </div>
    </div>
  );
}

export default App;