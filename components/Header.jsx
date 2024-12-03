import logo from "../images/globe.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="globe icon" />
            <h1>MY TRAVEL JOURNAL</h1>
        </header>
    )
}