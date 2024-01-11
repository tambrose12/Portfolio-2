import codeDesk from "../assets/codeDesk.jpg"
import codeDesk2 from "../assets/codeDesk2.jpg"
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { FaMedium } from 'react-icons/fa'
import { GrDocumentUser } from "react-icons/gr";
import Resume from '../assets/ResumeUpdated.pdf'
import { MdOutlineEmail } from "react-icons/md";
import { AppearOnScroll } from "./AppearOnScroll"


export default function Contact() {
    return (
        <section className="pt-40 mb-10 py-8" id="contact">
            <AppearOnScroll>
                <article className="grid grid-cols-1 place-items-center">
                    <h2 className="mb-16 text-4xl font-bold tracking-tight">
                        <u className="text-teal-800 dark:text-cyan-500 text-4xl font-bold tracking-tight">
                            Contact
                        </u>
                        {" "} Me
                    </h2>

                </article>
            </AppearOnScroll>
            <AppearOnScroll>
                <div className="flex items-center place-content-center text-center">
                    <div className="text-center mb-8 md:mb-0">
                        <div className="mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-600 md:text-6xl text-2xl mx-2 hover:shadow-md hover:shadow-teal-800 dark:hover:shadow-cyan-600">
                            <a href='https://www.linkedin.com/in/taylorambrose'>
                                <ImLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="text-center mb-8 md:mb-0">
                        <div className="mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-600 md:text-6xl text-2xl mx-2 hover:shadow-md hover:shadow-teal-800 dark:hover:shadow-cyan-600">
                            <a href='https://github.com/tambrose12'>
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                    <div className="text-center mb-8 md:mb-0">
                        <div className="mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-600 md:text-6xl text-2xl mx-2 hover:shadow-md hover:shadow-teal-800 dark:hover:shadow-cyan-600">
                            <a href='https://medium.com/@taykesby'>
                                <FaMedium />
                            </a>
                        </div>
                    </div>
                    <div className="text-center mb-8 md:mb-0">
                        <div className="mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-600 md:text-6xl text-2xl mx-2 hover:shadow-md hover:shadow-teal-800 dark:hover:shadow-cyan-600">
                            <a href={Resume}>
                                <GrDocumentUser />
                            </a>
                        </div>
                    </div>
                    <div className="text-center mb-8 md:mb-0">
                        <div className="mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-600 md:text-6xl text-2xl mx-2 hover:shadow-md hover:shadow-teal-800 dark:hover:shadow-cyan-600">
                            <a href="mailto:taykesby@gmail.com?subject=Hello%20Taylor">
                                <MdOutlineEmail />
                            </a>
                        </div>
                    </div>
                </div>
            </AppearOnScroll>
        </section >
    );
}
