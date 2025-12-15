import { AppearOnScroll } from "./AppearOnScroll";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io";
import { BiLogoFlask } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { SiSqlalchemy } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { PiFileSqlDuotone } from "react-icons/pi";







export default function TechStack() {


    return (
        <section className="mb-32 pt-20 text-center container px-4" id="tech">
            <AppearOnScroll>
                <article className="grid grid-cols-1 place-items-center">
                    <h2 className="mb-16 text-4xl font-bold tracking-tight">
                        Tech{" "}
                        <u className="text-teal-800 dark:text-cyan-500 text-4xl font-bold tracking-tight">
                            Stack
                        </u>
                    </h2>
                    <p className="mb-12 text-xl lg:max-w-2xl lg:text-center">
                        These are the programming languages, technologies, libraries, and frameworks that I have experience developing with:
                    </p>

                </article>
            </AppearOnScroll>
            <AppearOnScroll>
                <div className="grid md:gap-x-6 grid-cols-3 lg:gap-x-12 md:mx-38">
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <RiJavascriptFill />
                        </div>
                        <h5 className="mb-4 text-lg font-bold">JavaScript</h5>

                    </div>

                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <RiReactjsLine />
                        </div>
                        <h5 className="mb-4 text-lg font-bold">React</h5>

                    </div>

                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <IoLogoPython />

                        </div>
                        <h5 className="mb-4 text-lg font-bold">
                            Python
                        </h5>

                    </div>

                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <PiFileSqlDuotone />

                        </div>
                        <h5 className="mb-4 text-lg font-bold">SQL</h5>

                    </div>

                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <SiSqlite />

                        </div>
                        <h5 className="mb-4 text-lg font-bold">SQLite</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <SiSqlalchemy />

                        </div>
                        <h5 className="mb-4 text-lg font-bold">SQLAlchemy</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <BiLogoFlask />
                        </div>
                        <h5 className="mb-4 text-lg font-bold">Flask</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <TiHtml5 />

                        </div>
                        <h5 className="mb-4 text-lg font-bold">HTML5</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <FaCss3 />


                        </div>
                        <h5 className="mb-4 text-lg font-bold">CSS</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <SiTailwindcss />

                        </div>
                        <h5 className="mb-4 text-lg font-bold">TailwindCSS</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <SiVite />


                        </div>
                        <h5 className="mb-4 text-lg font-bold">Vite</h5>

                    </div>
                    <div className="md:mb-12">
                        <div className="md:mb-6 inline-block rounded-md bg-teal-800 dark:bg-cyan-600 md:p-4 text-gray-300 dark:text-primary text-6xl md:text-8xl">
                            <FaGithub />



                        </div>
                        <h5 className="mb-4 text-lg font-bold">GitHub</h5>
                    </div>
                </div>
                {/* <div className="grid gap-x-6 md:grid-cols-2 lg:gap-x-12 md:mx-78"> */}

                {/* </div> */}
            </AppearOnScroll>
        </section>
    );
}
