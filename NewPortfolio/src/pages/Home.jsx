import Navigation from "../components/Navigation"
import Projects from "../components/Projects"
import MyResume from "../components/MyResume"
import Skills from "../components/Skills"
import Summary from "../components/Summary"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"


export default function Home() {
    return (
        <main className="">
            <Navigation />
            <div className="container mx-auto" >
                <Summary />
                <TechStack />
                <Skills />
                <Projects />
                <MyResume />
                <Contact />
            </div>

        </main>
    )
}