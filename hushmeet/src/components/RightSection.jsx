import videocall from "../assets/videocall.png"
import { ShieldCheck } from "lucide-react"

const RightSection = () => {
    return (
        <div className="h-screen w-1/2 py-10 mr-20 flex flex-col items-end gap-2">
            <div className="h-80 w-120 rounded-2xl bg-white">
                <img className="h-80 w-120 rounded-2xl object-cover" src={videocall} alt="Unsplash1" />
            </div>
            <div className="flex gap-2">
                <div className="h-70 w-100 rounded-2xl bg-gradient-to-br from-green-200 via-[#EBF4F6] to-[#088395]">
                </div>
                <div className="h-70 w-50 relative rounded-2xl bg-gradient-to-br from-green-200 via-[#EBF4F6] to-[#088395]">
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <ShieldCheck size={40} fill="#a5c7d4" strokeWidth={0.5} />
                        <div className="text-sm">
                            Hushmeet keeps your conversations private and your notes sharp—automatically.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSection;