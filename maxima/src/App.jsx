import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import CardSection from "./components/CardSection.jsx"

const image = [{image:"https://images.unsplash.com/photo-1506787497326-c2736dde1bef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbmFuY2lhbHxlbnwwfHwwfHx8MA%3D%3D"},{image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"},{image:"https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"}]

const App = () =>{
  return <div className="parent">
    <Navbar />
    <div className="h-full flex gap-5">
      <Hero />
      <CardSection image={image} />
    </div>
    
  </div>
}

export default App;