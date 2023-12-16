import codeDesk from "../assets/codeDesk.jpg"
import codeDesk2 from "../assets/codeDesk2.jpg"

export default function Summary() {
    return (
        <section className="mb-20 py-8" id="taylor">
            <h1 className="text-center text-4xl font-bold tracking-tight pt-20">
                <u className="text-teal-800">Hi,</u> I'm Taylor!
            </h1>
            <div className="flex flex-wrap px-3">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                    <div className="flex lg:py-12">
                        {/* <img
                            src={codeDesk}
                            className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                            alt="Photo by Walling on Unsplash"
                        /> */}
                        <img
                            src={codeDesk2}
                            className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                            alt="Photo by Fotis Fotopoulos on Unsplash"
                        />
                    </div>
                </div>

                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                    <div className="flex h-full items-center rounded-lg bg-lapiz-400 p-6 text-center lg:pl-12 lg:text-left">
                        <div className="lg:pl-12">
                            <h2 className="mb-8 text-3xl font-bold">
                                Full Stack Software Engineer
                            </h2>
                            <p className="mb-8 pb-2 lg:pb-0">
                                I am passionate about solving problems with Web Development and Design.
                            </p>
                            <p className="mb-8 pb-2 lg:pb-0">I enjoy thinking through complex problems, and the rewarding feeling of overcoming challenges. Creating functional web applications brings me a great deal of satisfaction.</p>

                            <p className="mb-8 pb-2 lg:pb-0">I possess a background in the mortgage and financial industry, where strong skills in detail-oriented documentation review and communicating complex product and government guidelines to teams were frequently demonstrated. My former position required me to carefully examine my work and find solutions to problems. This skillset will allow me to be a valuable asset in almost any line of work, including Software Engineering and Web Development.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
