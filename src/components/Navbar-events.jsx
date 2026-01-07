import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <img
                src={logo}
                alt="Realms of AI"
                className="nav-logo"
                onClick={() => window.location.href = "/"}
            />

            <ul className="nav-links">
                <li onClick={() => window.location.href = "/"}>
                    Home
                </li>
                <li onClick={() => window.location.href = "/#about"}>
                    About
                </li>
                <li onClick={() => window.location.href = "/#events"}>
                    Events
                </li>
            </ul>

            <button
                className="nav-btn"
                onClick={() => window.open(
                    "https://forms.gle/AvrtUCcaFqbydfdM9",
                    "_blank"
                )}
            >
                <span className="btn-desktop">Register Now</span>
                <span className="btn-mobile">Register</span>
            </button>

        </nav>
    );
};

export default Navbar;
