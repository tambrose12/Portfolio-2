
import { BsGithub } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { FaMedium } from 'react-icons/fa'
import { GrDocumentUser } from "react-icons/gr";
import Resume from '../assets/ResumeUpdated.pdf'
import { MdOutlineEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import PortfolioPicture from "../assets/PortfolioPicture.png"


export default function Summary() {
    return (
        <section className="mb-20 py-8" id="taylor">
            <h1 className="text-center text-4xl font-bold tracking-tight pt-20">
                Hello!
            </h1>
            <h1 className="text-center text-4xl font-bold tracking-tight">
                I'm <u className="text-teal-800 dark:text-cyan-500">Taylor Ambrose</u>
            </h1>
            <div className="flex flex-wrap px-3 py-3">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                    <div className="flex lg:py-12">
                        {/* <img
                            src={codeDesk}
                            className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                            alt="Photo by Walling on Unsplash"
                        /> */}
                        <img
                            src={PortfolioPicture}
                            className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                            alt="Photo by Fotis Fotopoulos on Unsplash"
                        />
                    </div>
                </div>

                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                    <div className="flex h-full items-center rounded-lg p-6 text-center lg:pl-12 lg:text-left">
                        <div className="lg:pl-12">
                            <h2 className="mb-8 text-3xl font-bold">
                                Full-Stack Software Engineer
                            </h2>
                            <p className="mb-8 pb-2 lg:pb-0">
                                I am passionate about creating beautiful and user-friendly sites and applications with Web Development and Design.
                            </p>
                            <p className="mb-8 pb-2 lg:pb-0">I enjoy thinking through complex problems, and the rewarding feeling of overcoming challenges. Creating functional web applications brings me a great deal of satisfaction.</p>

                            <p className="mb-8 pb-2 lg:pb-0">I possess a background in the mortgage and financial industry, where strong skills in detail-oriented documentation review and communicating complex product and government guidelines to teams were frequently demonstrated. My former position required me to carefully examine my work and find solutions to problems. This skillset allows me to be a valuable asset in almost any line of work, including Software Engineering and Web Development.</p>

                        </div>
                    </div>
                </div>
            </div>
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
                        <a href="https://github.com/CompassTaylor">
                            <VscGithub />
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
        </section>
    );
}
