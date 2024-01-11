import { AppearOnScroll } from "./AppearOnScroll";


export default function Skills() {


    return (
        <section className="mb-32 pt-32 text-center container px-4" id="skills">
            <AppearOnScroll>
                <article className="grid grid-cols-1 place-items-center">
                    <h2 className="mb-16 text-4xl font-bold tracking-tight">
                        My{" "}
                        <u className="text-teal-800 dark:text-cyan-500 text-4xl font-bold tracking-tight">
                            Skills
                        </u>
                    </h2>

                </article>
            </AppearOnScroll>
            <AppearOnScroll>
                <div className="flex flex-wrap md:mx-38">
                    {/* <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 mx-44"> */}
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Quick Learner</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Attention to Detail</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Teamwork</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Written Communication</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Collaboration</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Planning</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Microsoft Office</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Typing</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Time Management</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Priortization</h5>
                        </div>
                    </div>

                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Orginazation</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Version Control</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Customer Service</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className=" md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Spoken Communication</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Problem Solving</h5>
                        </div>
                    </div>
                    <div className="flex-auto mb-12 md:mb-0">
                        <div className="md:mb-6 inline-block rounded-full bg-gray-300 p-2 text-teal-800 dark:text-cyan-700 text-8xl sm:text-2xl">
                            <h5 className="text-lg font-bold">Interpersonal Skills</h5>
                        </div>
                    </div>
                </div>
            </AppearOnScroll>
        </section>
    );
}
