const Card = ({ image }) => {
    return (
        <div className="overflow-hidden shrink-0">
            <img
                className="h-full w-80 p-2 object-cover rounded-4xl"
                src={image}
                alt="cardImage"
            />
        </div>
    );
};

export default Card;