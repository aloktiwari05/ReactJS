import { useState } from "react";

const FAQ = ({faq}) => {
    const [open, setOpen] = useState(false);

    return (<div onClick={()=>{setOpen(!open)}} className="cursor-pointer font-semibold text-2xl">
        <div className="flex items-center justify-between h-18 bg-[#181818]">
            <div className="px-5">{faq.faq}</div>
            <span className="px-5"> {open ? "⏷" : "⏶" } </span>
        </div>
        {open ? <p className="p-5 border-t-2 border-black bg-[#181818]">{faq.answer}</p> : "" }
    </div>)
}

export default FAQ;