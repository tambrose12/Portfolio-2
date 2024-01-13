import { AppearOnScroll } from "./AppearOnScroll";
import { GrDocumentUser } from "react-icons/gr";
import Resume from '../assets/ResumeUpdated.pdf'
import Cert from "../assets/Cert.png"

export default function MyResume() {

    return (
        <section className='pt-20 projects project-section' id='resume'>
            <AppearOnScroll>
                <article className="grid grid-cols-1 place-items-center">
                    <h2 className="mb-16 text-4xl font-bold tracking-tight">
                        My{" "}
                        <u className="text-teal-800 dark:text-cyan-500 text-4xl font-bold tracking-tight">
                            Resume
                        </u>
                    </h2>

                </article>
            </AppearOnScroll>
            <AppearOnScroll>
                <div className="flex items-center text-center">
                    <div className="flex-auto mb-8 md:mb-0">
                        <div className="mb-16 inline-block rounded-md text-gray-200 p-4 bg-teal-800 dark:bg-cyan-600 text-2xl hover:shadow-md hover:shadow-gray-500 dark:hover:shadow-cyan-600">
                            <a href={Resume} className="flex">
                                <GrDocumentUser /> {" "}
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
                <img id='cert' src={Cert} alt="Cert-of-Completion" />
            </AppearOnScroll>
        </section>
    )
}