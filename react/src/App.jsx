import Card from "./components/Cards.jsx"
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

// import {Card1} from "./components/Cards.jsx"

const users = [
  {
    "profileImage": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "Aarav Sharma",
    "followers": 1250,
    "following": 300,
    "description": "Product Designer who focuses on simplicity and usability."
  },
  {
    "profileImage": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Priya Verma",
    "followers": 980,
    "following": 450,
    "description": "UI/UX Designer passionate about crafting intuitive user experiences."
  },
  {
    "profileImage": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Rohan Mehta",
    "followers": 2100,
    "following": 180,
    "description": "Frontend Developer who loves building responsive and interactive interfaces."
  },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/women/4.jpg",
  //   "name": "Sneha Iyer",
  //   "followers": 3050,
  //   "following": 520,
  //   "description": "Digital Illustrator creating modern and minimal visual stories."
  // },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/men/5.jpg",
  //   "name": "Vikram Singh",
  //   "followers": 870,
  //   "following": 260,
  //   "description": "Mobile App Developer specializing in Android and cross-platform apps."
  // },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/women/6.jpg",
  //   "name": "Ananya Gupta",
  //   "followers": 1500,
  //   "following": 390,
  //   "description": "Content Creator sharing tips on design, productivity, and tech."
  // },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/men/7.jpg",
  //   "name": "Karan Patel",
  //   "followers": 4300,
  //   "following": 610,
  //   "description": "Entrepreneur building digital products and startups."
  // },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/women/8.jpg",
  //   "name": "Meera Nair",
  //   "followers": 2750,
  //   "following": 480,
  //   "description": "Photographer capturing lifestyle, travel, and culture."
  // },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/men/9.jpg",
  //   "name": "Aditya Rao",
  //   "followers": 1990,
  //   "following": 350,
  //   "description": "Backend Engineer focused on scalable systems and APIs."
  // },
  // {
  //   "profileImage": "https://randomuser.me/api/portraits/women/10.jpg",
  //   "name": "Kavya Reddy",
  //   "followers": 3200,
  //   "following": 700,
  //   "description": "Marketing Specialist helping brands grow through digital strategies."
  // }
]

const App = () => {

  const [num, setNum] = useState(0);
  function incNum() {
    setNum(num + 1);
  }

  function decNum() {
    setNum(num - 1);
  }

  return (
    <>
      <div className="parent">
        {users.map((user) => (
          <Card user={user} />
        ))}
      </div>
      <div className="flex items-center justify-center rounded-4xl h-30 w-60 bg-black m-20 gap-10">
        <h1 className="flex justify-center items-center p-5">
          <ArrowBigLeft size={50} color="white" onClick={decNum} />
          <div className="text-white text-5xl bg-gray-700 rounded-2xl text-center p-2">{num}</div>
          <ArrowBigRight size={50} color="white" onClick={incNum} />
        </h1>
      </div>
    </>

  );
}

export default App;