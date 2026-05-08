import LeftSection from "./LeftSection.jsx"
import RightSection from "./RightSection.jsx"

const Center = () => {
    return (
        <div className="flex h-screen justify-between">
            <LeftSection />
            <RightSection />
        </div>

    )
}

export default Center;