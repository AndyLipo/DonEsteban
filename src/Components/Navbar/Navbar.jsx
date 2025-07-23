import ContactBtn from "./ContactBtn"
import ContactCall from "./ContactCall"
import LogoBtn from "./LogoBtn"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const handleClick = () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <nav
                role="navigation"
                aria-label="Navegación principal"
                className="flex justify-between fixed top-0 left-0 right-0 px-4 sm:px-6 text-slate-900 dark:text-slate-100 z-50 sm:rounded-lg border-b border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
            >
                <NavLink to="/" end className="flex-shrink-0">
                    <LogoBtn />
                </NavLink>

                <div className="flex items-center gap-3 sm:gap-6">
                    <NavLink to="/About" className="hover:opacity-80 transition-opacity">
                        <ContactCall />
                    </NavLink>
                    <NavLink to="/" className="hover:opacity-80 transition-opacity" onClick={handleClick}>
                        <ContactBtn />
                    </NavLink>
                </div>
            </nav>

        </>
    )
}

export default Navbar