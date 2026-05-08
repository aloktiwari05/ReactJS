import MenuCard from "./MenuCard";
import { House, Videotape, Film, TvMinimalPlay, CircleUser, History, ListVideo, Clock4, ThumbsUp, ArrowDownToLine, SquarePlay, ShoppingCart, Music, Flag, } from "lucide-react"

const arr1 = [
    { iconName: House, description: "Home" },
    { iconName: Videotape, description: "Shorts" },
    { iconName: Film, description: "Subscriptions" },
]

const arr2 = [
    { iconName: CircleUser, description: "Your Channel" },
    { iconName: History, description: "History" },
    { iconName: ListVideo, description: "Playlists" },
    { iconName: Clock4, description: "Watch Later" },
    { iconName: ThumbsUp, description: "Liked Videos" },
    { iconName: SquarePlay, description: "Your videos" },
    { iconName: ArrowDownToLine, description: "Downloads" },
]

const arr3 = [
    { iconName: ShoppingCart, description: "Purchases" },
    { iconName: Music, description: "YouTube Music" },
    { iconName: Film, description: "Movies & Shows" },
    { iconName: TvMinimalPlay, description: "Live" },
    { iconName: Flag, description: "Report History" }
];

const Menu = () => {
    return (
        <div id="menu" className="h-screen w-full pl-5 py-5 flex flex-col items-start justify-start gap-5 overflow-y-auto shrink-0">
            <div className="flex flex-col gap-4">
                {arr1.map((list, index) => (
                    <MenuCard key={index} list={list} />
                ))}
            </div>

            <hr className="w-40 my-5 border border-gray-600" />

            <div className="flex flex-col gap-4">
                {arr2.map((list, index) => (
                    <MenuCard key={index} list={list} />
                ))}
            </div>

            <hr className="w-40 my-5 border border-gray-600" />

            <div className="flex flex-col gap-4">
                {arr3.map((list, index) => (
                    <MenuCard key={index} list={list} />
                ))}
            </div>
        </div>
    )
}

export default Menu;