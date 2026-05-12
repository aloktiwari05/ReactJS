// import { useState, } from "react";
import FAQ from "./FAQ.jsx";
import { Monitor, Download, Telescope, Sticker } from "lucide-react";
import TrendingCards from "./TrendingCards.jsx";

const Section2 = () => {
    const netflixFaqs = [
        {
            faq: "What is Netflix?",
            answer:
                "Netflix is a streaming service that offers movies, TV shows, documentaries, anime, and original content that users can watch online on multiple devices."
        },
        {
            faq: "How much does Netflix cost?",
            answer:
                "Netflix offers different subscription plans depending on the country and features such as video quality and the number of devices that can stream simultaneously."
        },
        {
            faq: "Can I watch Netflix offline?",
            answer:
                "Yes, Netflix allows users to download selected movies and TV shows on supported devices for offline viewing."
        },
        {
            faq: "What devices support Netflix?",
            answer:
                "Netflix is available on smart TVs, smartphones, tablets, laptops, gaming consoles, and streaming devices like Chromecast and Fire TV."
        },
        {
            faq: "Does Netflix offer a free trial?",
            answer:
                "Netflix does not usually offer a free trial in most regions, but promotional offers may occasionally be available."
        },
        {
            faq: "How can I cancel my Netflix subscription?",
            answer:
                "You can cancel your Netflix subscription anytime through your account settings on the Netflix website or app."
        }
    ];

    const trendingMovies = [
        {
            "id": 1,
            "title": "Inception",
            "image": "https://www.tallengestore.com/cdn/shop/products/Inception-LeonardoDiCaprio-ChristopherNolan-HollywoodSciFiMoviePoster_66029b94-50ae-494c-b11d-60a3d91268b5.jpg?v=1685582036"
        },
        {
            "id": 2,
            "title": "The Dark Knight",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg"
        },
        {
            "id": 3,
            "title": "Interstellar",
            "image": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
        },
        {
            "id": 4,
            "title": "Titanic",
            "image": "https://i.pinimg.com/originals/44/55/d9/4455d96357fb041d1cf3c8a5264ed593.jpg"
        },
        {
            "id": 5,
            "title": "Avatar",
            "image": "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SL3840_.jpg"
        },
        {
            "id": 6,
            "title": "Forrest Gump",
            "image": "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg"
        },
        {
            "id": 7,
            "title": "The Shawshank Redemption",
            "image": "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
        },
        {
            "id": 8,
            "title": "The Godfather",
            "image": "https://www.tallengestore.com/cdn/shop/products/Movie_Poster_-_Marlon_Brando_-_The_Godfather_-_Tallenge_Hollywood_Poster_Collection_1d2211d5-823d-4fde-8077-8cf452b635e8.jpg?v=1591603213"
        },
        {
            "id": 9,
            "title": "Avengers: Endgame",
            "image": "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
        },
        {
            "id": 10,
            "title": "Spider-Man: No Way Home",
            "image": "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
        }
    ];

    return (
        <div className="mx-40 my-10 flex flex-col gap-10 text-white">
            <div>
                <div className="font-semibold text-3xl">
                    Trending Now
                </div>
                <div id="scroll" className="w-full px-5 flex flex-nowrap gap-5 py-5 overflow-x-auto overflow-y-hidden">
                    {trendingMovies.map((movie) => {
                        return (
                            <TrendingCards
                                key={movie.id}
                                movie={movie}
                            />
                        );
                    })}
                </div>
            </div>
            <div>
                <div className="font-semibold text-3xl">More reasons to join</div>
                <div className="flex gap-5 py-5">

                    <div className="h-70 w-70 p-5 rounded-2xl bg-gray-700">
                        <div className="font-semibold text-2xl">Demo Title</div>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                        <div className="py-5 h-full flex justify-end items-center"><Monitor size={60} stroke="white" /></div>
                    </div>
                    <div className="h-70 w-70 p-5 rounded-2xl bg-gray-700">
                        <div className="font-semibold text-2xl">Demo Title</div>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                        <div className="py-5 h-full flex justify-end items-center"><Download size={60} stroke="white" /></div>
                    </div>
                    <div className="h-70 w-70 p-5 rounded-2xl bg-gray-700">
                        <div className="font-semibold text-2xl">Demo Title</div>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                        <div className="py-5 h-full flex justify-end items-center"><Telescope size={60} stroke="white" /></div>
                    </div>
                    <div className="h-70 w-70 p-5 rounded-2xl bg-gray-700">
                        <div className="font-semibold text-2xl">Demo Title</div>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                        <div className="py-5 h-full flex justify-end items-center"><Sticker size={60} stroke="white" /></div>
                    </div>

                </div>
            </div>

            <div>
                <div className="font-semibold text-3xl">Frequently asked questions</div>
                <div className="flex flex-col gap-2 py-5">
                    {netflixFaqs.map((item, index) => {
                        return (<FAQ key={index} faq={item} />)
                    })}
                </div>
            </div>

            <div>
                <div className="mb-20 font-semibold text-lg flex flex-col items-center">Ready to watch? Enter your email to create or restart your membership.
                    <div className="h-18 p-2 flex items-center justify-center gap-2">
                        <input type="text" placeholder="Email address" className="px-5 h-full bg-[#121212] text-white font-semibold rounded border border-gray-500" />
                        <button className="h-full px-5 bg-[#FF0000] text-white font-bold rounded text-2xl">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;