import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LogoBtn from './LogoBtn'
import FooterNavigation from '../Footer/FooterNavigation'

export default function Navbar({
    navLinks = [
        { name: "Inicio", path: "/Inicio" },
        { name: "Sobre nosotros", path: "/About" },
        { name: "Contacto", path: "/Contacto" },
        { name: "Solicitar Presupuesto", path: '/#contact-form' },
    ],
}) {
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

    // Función para manejar clicks en navLinks
    const handleNavClick = (link) => {
        if (link.name === "Solicitar Presupuesto") {
            handleScrollToForm()
        } else {
            setMenuOpen(false)
        }
    }

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/70">
            <div className="flex items-center justify-between px-3 py-2 sm:px-6">
                <NavLink to="/" end className="flex-shrink-0">
                    <LogoBtn />
                </NavLink>

                <nav className="hidden md:flex md:items-center md:space-x-8 hover:opacity-80 transition-opacity">
                    <FooterNavigation
                        links={navLinks}
                        onNavClick={handleNavClick}
                    />
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
                    {navLinks.map((link) => (
                        link.name === "Solicite Presupuesto" ? (
                            <button
                                key={link.name}
                                onClick={handleScrollToForm}
                                className="block w-full text-center hover:opacity-80 transition-opacity py-2"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="block hover:opacity-80 transition-opacity py-2"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                </div>
            )}
        </header>
    )
}