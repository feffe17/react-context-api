import Navbar from "../components/Navbar"

export default function AppHeader() {

    const title = "Il mio blog"
    return (
        <header>
            <div className="title">
                <h1>{title}</h1>
                <Navbar />
            </div>
        </header>
    )

}