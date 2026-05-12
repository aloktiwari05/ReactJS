const TrendingCards = ({movie}) => {
    return (
        <div className="relative h-60 w-40 shrink-0 scale-95 bg-amber-200 rounded-md text-black">
            <img className="h-full w-full rounded-md object-cover" src={movie.image} alt={movie.title} />
            <div className="absolute top-30 -left-4 font-bold text-black text-7xl number-outline">{movie.id}</div>
        </div>
    )
}

export default TrendingCards;