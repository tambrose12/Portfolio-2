import imageUrl from '../assets/RecipeBox.jpeg'
import imageUrl2 from '../assets/F1-Flask-Paced.png'
import imageUrl3 from '../assets/HabitStat.png'
import imageUrl4 from '../assets/GCU-CLI.png'
import seedco from '../assets/SeedCo.png'
import seedcomobile from '../assets/SeedCoMobile.png'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiFlask } from 'react-icons/si'
import { DiSqllite } from 'react-icons/di'
import { SiJavascript, SiVite } from 'react-icons/si'


export default function Projects() {


    return (
        <section className='projects project-section' id='projects'>
            <article className="grid grid-cols-1 place-items-center">
                <h2 className="mb-16 text-4xl font-bold tracking-tight">
                    My{" "}
                    <u className="text-teal-800 text-4xl font-bold tracking-tight">
                        Projects
                    </u>
                </h2>
                <p className="mb-12 text-xl lg:max-w-2xl lg:text-center">
                    Check out some of my work...
                </p>

            </article>
            <div className='grid gap-x-6 gap-y-6 md:grid-cols-3 lg:gap-x-12 md:mx-44'>
                <a href="https://github.com/tambrose12/Recipe-Box"><img className='projectImg border border-teal-800 rounded ' src={imageUrl} alt="RecipeBox-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/F1-Flask-Paced"><img className='projectImg border border-teal-800 rounded ' src={imageUrl2} alt="F1-Flask-Paced-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/HabitStat"><img className='projectImg border border-teal-800 rounded ' src={imageUrl3} alt="HabitStat-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/GitClassyU-CLI"><img className='projectImg border border-teal-800 rounded ' src={imageUrl4} alt="GCU-CLI-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/seed-co"><img className='projectImg border border-teal-800 rounded ' src={seedco} alt="SeedCo-Thumbnail" /></a>

                <a href="https://github.com/tambrose12/seed-co"><img className='projectImg border border-teal-800 rounded ' src={seedcomobile} alt="SeedCoMobile-Thumbnail" /></a>
            </div>
        </section>
    )
}