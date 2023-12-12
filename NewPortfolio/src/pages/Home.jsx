import Navigation from "../components/Navigation"
import Skills from "../components/Skills"
import Summary from "../components/Summary"
import TechStack from "../components/TechStack"


export default function Home() {
    return (
        <main className="">
            <Navigation />
            <div className="container mx-auto" >
                <Summary />
                <TechStack />
                <Skills />
            </div>

        </main>
    )
}