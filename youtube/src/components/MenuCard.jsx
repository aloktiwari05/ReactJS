const MenuCard = ({list}) => {
    const Icon = list.iconName;
    const Description = list.description;
    return (
        <div className="flex justify-start items-center gap-5">
            <Icon stroke="white" size={20}/><div className="text-white">{Description}</div>
        </div>
    )
}

export default MenuCard;