import { Dot, EllipsisVertical } from "lucide-react"

const ContentCard = ({content}) => {
    console.log(content)
    return (
        <div className="w-110 rounded-2xl flex flex-col items-center justify-start">
            <img className="p-2 rounded-2xl " src={content.thumbnail} alt="" />
            <div className="w-110 h-full p-2 flex flex-nowrap items-start justify-between gap-2">
                <img src={content.channelLogo} className="h-12 w-12 rounded-full" alt="channellogo" />
                <div className="flex flex-col items-start">
                    <div className="text-base font-bold text-white">{content.title}</div>
                    <div className="text-sm font-semibold text-gray-400">{content.channelName}</div>
                    <div className="text-sm font-semibold text-gray-400 flex">{content.views}<Dot />{content.published}</div>
                </div>
                <EllipsisVertical className="" stroke="white" />
            </div>
        </div>
    )
}

export default ContentCard;