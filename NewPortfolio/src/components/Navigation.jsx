import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";




const Navigation = () => {
    let Links = [

        { name: "Tech Stack", link: "#tech" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Resume", link: "#resume" },
        { name: "Contact", link: "#contact" },

    ]

    let [open, setOpen] = useState(false)

    return (
        <div className="shadow-md w-full fixed top-0 left-0 text-teal-800 z-[20]">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 dark:bg-slate-800 dark:text-gray-300">
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <a href="/" className="hover:text-gray-400">Taylor Ambrose</a>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden">
                    {open ? <IoCloseSharp /> : <GiHamburgerMenu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="hover:text-gray-500">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navigation