import Navigation from "../components/Navigation"
import Projects from "../components/Projects"
import MyResume from "../components/MyResume"
import Skills from "../components/Skills"
import Summary from "../components/Summary"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"


export default function Home() {
    return (
        <div className="dark:bg-slate-800 dark:text-gray-300">
            <Navigation />
            <div className="container mx-auto" >
                <Summary />
                <TechStack />
                <Skills />
                <Projects />
                <MyResume />
                <Contact />
            </div>

        </div>
    )
}