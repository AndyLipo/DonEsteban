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
        <header className="fixed top-0 left-0 z-50 w-full bg-white/40 backdrop-blur-md shadow-sm">
            <div className="container mx-auto">
                <div className="flex items-center justify-between px-3 py-3 sm:px-6">
                    {/* Logo */}
                    <NavLink to="/" end className="flex-shrink-0 z-10" aria-label="Ir a inicio">
                        <LogoBtn />
                    </NavLink>

                    {/* Desktop Navigation - Oculto en mobile, centrado en desktop */}
                    <nav className="hidden md:flex md:items-center md:flex-1 md:justify-center md:ml-8">
                        <FooterNavigation
                            links={navLinks}
                            onNavClick={handleNavClick}
                            isMobile={false}
                        />
                    </nav>

                    {/* Hamburger Button - Solo visible en mobile */}
                    <div className="md:hidden z-10">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            type="button"
                        >
                            {menuOpen ? (
                                <X size={24} className="text-gray-700" aria-hidden="true" />
                            ) : (
                                <Menu size={24} className="text-gray-700" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Spacer para mantener hamburguesa a la derecha en desktop */}
                    <div className="hidden md:block w-10"></div>
                </div>
            </div>

            {/* Mobile Menu - Solo visible cuando menuOpen es true Y en mobile */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden bg-white border-t border-gray-200 animate__animated animate__fadeIn"
                >
                    <nav className="py-4 px-4">
                        <FooterNavigation
                            links={navLinks}
                            onNavClick={handleNavClick}
                            isMobile={true}
                        />
                    </nav>
                </div>
            )}
        </header>
    )
}