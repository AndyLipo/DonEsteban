import AboutBtn from "./AboutBtn"
import ContactBtn from "./ContactBtn"
import LogoBtn from "./LogoBtn"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav
                role="navigation"
                aria-label="Navegación principal"
                className="backdrop-blur-sm flex justify-between fixed top-0 left-0 right-0 px-4 sm:px-6 text-slate-900 dark:text-slate-100 z-50 sm:rounded-lg"
            >
                <NavLink to="/" end className="flex-shrink-0">
                    <LogoBtn />
                </NavLink>

                {/* En móvil se mantiene horizontal, en desktop con más espacio */}
                <div className="flex items-center gap-3 sm:gap-6">
                    <NavLink to="/About" className="hover:opacity-80 transition-opacity">
                        <AboutBtn />
                    </NavLink>
                    <NavLink to="/Contact" className="hover:opacity-80 transition-opacity">
                        <ContactBtn />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar