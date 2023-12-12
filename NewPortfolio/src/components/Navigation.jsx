import React from "react";

const Navigation = () => {
    let Links = [
        { name: "About Me", link: "/" },
        { name: "Tech Stack", link: "/stack" },
        { name: "Skills", link: "/skills" },
        { name: "Projects", link: "/projects" },
        { name: "Resume", link: "/resume" },
        { name: "Contact", link: "/contact" },

    ]


    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
                    Taylor Ambrose
                </div>
                <ul>
                    {
                        Links.map((link) => (
                            <li>
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navigation