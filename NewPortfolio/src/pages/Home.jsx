import Navigation from "../components/Navigation"
import Summary from "../components/Summary"


export default function Home() {
    return (
        <main className="">
            <Navigation />
            <div className="container mx-auto" >
                <Summary />
            </div>

        </main>
    )
}