import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoBtn from './LogoBtn'
import ContactBtn from './ContactBtn'
import ContactCall from './ContactCall'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const handleScrollToForm = () => {
        if (window.location.pathname !== '/') {
            navigate('/', { state: { scrollToForm: true } })
        } else {
            const form = document.getElementById('contact-form')
            if (form) form.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
    }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                <NavLink to="/" end className="flex-shrink-0">
                    <LogoBtn />
                </NavLink>

                <nav className="hidden md:flex md:items-center md:space-x-8">
                    <div to="/About" className="hover:opacity-80 transition-opacity">
                        <ContactCall />
                    </div>
                    <ContactBtn onClick={handleScrollToForm} className="hover:opacity-80 transition-opacity" />
                </nav>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        type="button"
                    >
                        {menuOpen ? (
                            <X size={24} aria-hidden="true" />
                        ) : (
                            <Menu size={24} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t text-center space-y-4 py-6 text-sm font-medium animate__animated animate__fadeIn">
                    <NavLink
                        to="/About"
                        className="hover:opacity-80 transition-opacity"
                        onClick={() => setMenuOpen(false)}
                    >
                        <ContactCall />
                    </NavLink>

                    <button
                        onClick={handleScrollToForm}
                        className="hover:opacity-80 transition-opacity"
                    >
                        <ContactBtn />
                    </button>
                </div>
            )}
        </header>
    )
}
