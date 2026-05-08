const SuggestionCard = ({ suggestions }) => {
    return (
        <div className="h-10 w-max whitespace-nowrap flex items-center justify-center px-3 py-1 border border-gray-600 rounded-2xl bg-gray-700 text-white font-semibold text-m">
            {suggestions}
        </div>
    )
}

export default SuggestionCard;