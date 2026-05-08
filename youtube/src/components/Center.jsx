import ContentSection from "./ContentSection.jsx";
import SuggestionCard from "./SuggestionCard.jsx"

const youtubeSuggestions = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "News",
    "Podcasts",
    "JavaScript",
    "React",
    "AI & Machine Learning",
    "Cricket",
    "Comedy",
    "Movies",
    "Cooking",
    "Fitness",
    "Travel",
    "Recently Uploaded",
    "Watched",
    "New to You",
    "Mixes",
    "Trending"
];

const Center = () => {
    return (
        <div className="grid grid-rows-[60px_1fr] w-full h-full gap-5">
            <div id="suggestions" className="flex w-screen p-5 gap-2 overflow-y-hidden overflow-x-auto">
                {youtubeSuggestions.map((elem, index) => (
                    <SuggestionCard key={index} suggestions={elem} />
                ))}
            </div>
            <ContentSection />
        </div>
    )
}

export default Center;