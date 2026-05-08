import { Check, CircleCheck, Plus, User } from "lucide-react";

const Card = ({user}) => {
    return (
        <div className="Card">
            <div className="top">
                <img src={user.profileImage} alt="Profile" />

            </div>
            <div className="center">
                    <h3>
                        {user.name}
                        <span><Check size={30} stroke="#1DA1F2" strokeWidth={3.5}/></span>
                    </h3>
                <h4>
                    {user.description}
                </h4>
            </div>
            <div className="bottom">
                <span><User strokeWidth={1} /> {user.followers} </span>
                <span><CircleCheck strokeWidth={1} /> {user.following}</span>
                <button type="submit">Follow <Plus /></button>
            </div>
        </div>
    )
}


export default Card;