import { Sparkles, ArrowRight, ChevronLeft } from "lucide-react"


const LeftSection = () => {
    return(
         <div className="flex flex-col justify-between  px-20 py-20 center w-1/2">
                <div className="flex flex-col justify-start">
                    <div className="flex items-center text-green-500 gap-2"><Sparkles size={16} fill="green" strokeWidth={1} />Connecting AI features <ArrowRight size={20} strokeWidth={1.5} /></div>
                    <div className="text-7xl font-semibold tracking-tighter">Private Meetings.<br />Clear Summaries.</div>
                    <div className="pt-5 text-gray-400">
                        Record every meeting securely and get instant<br />
                        AI-powered summaries—only with HushMeet.
                    </div>
                    <button className="h-18 w-18 ml-10 my-5 flex items-center justify-center rounded-full bg-gray-600 text-white">
                        <ChevronLeft size={24} strokeWidth={3} />
                    </button>
                </div>
                <div className="flex justify-center gap-10 items-center w-90 h-30 border border-gray-200 rounded-2xl">
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">4.9</div>
                        <div className="text-xs text-gray-400">User Reviews</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">30K+</div>
                        <div className="text-xs text-gray-400">Active Users</div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="font-semibold text-2xl">15K+</div>
                        <div className="text-xs text-gray-400">Good Feedback</div>
                    </div>
                </div>
            </div>
    )
}

export default LeftSection;