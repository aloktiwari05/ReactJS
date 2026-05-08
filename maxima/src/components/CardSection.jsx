import Card from "./Card.jsx"

const CardSection = ({ image }) => {
    return (
        <div id="CardSection" className="h-150 mt-10 flex overflow-x-auto gap-2">
            {image.map((imgObj, index) => (
                <Card key={index} image={imgObj.image} />
            ))}
        </div>
    );
};

export default CardSection;