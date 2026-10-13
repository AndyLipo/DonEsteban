
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import LogoBtn from './LogoBtn'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [trabajosOpen, setTrabajosOpen] = useState(false)

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre nosotros', path: '/about' },
        { name: 'Contacto', path: '/contacto' },
    ]

    const trabajosLinks = [
        { name: 'Destapación', path: '/destapacion' },
        { name: 'Plomería', path: '/plomeria' },
    ]

    const closeMenus = () => {
        setMenuOpen(false)
        setTrabajosOpen(false)
    }

    const navClass = ({ isActive }) =>
        `block whitespace-nowrap rounded-xl px-4 py-3 transition-colors ${isActive
            ? 'text-blue-700 font-semibold'
            : 'text-gray-800 hover:text-blue-700'
        }`

    return (
        <header className="fixed top-0 left-0 z-50 w-full rounded-3xl bg-white/40 shadow-sm backdrop-blur-md">
            <div className="container mx-auto">
                <div className="flex items-center justify-between px-3 py-3 sm:px-6">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        end
                        onClick={closeMenus}
                        className="z-10 shrink-0"
                        aria-label="Ir a inicio"
                    >
                        <LogoBtn />
                    </NavLink>

                    {/* Navegación desktop */}
                    <nav
                        className="hidden flex-1 items-center justify-end gap-1 md:flex"
                        aria-label="Navegación principal"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === '/'}
                                className={navClass}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Menú desplegable Trabajos */}
                        <div className="group relative">
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-xl px-4 py-3 text-gray-800 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                aria-haspopup="true"
                            >
                                Trabajos
                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                                />
                            </button>

                            <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-2 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                {trabajosLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block rounded-xl px-4 py-3 transition-colors ${isActive
                                                ? 'bg-gray-100 font-semibold text-blue-700'
                                                : 'text-gray-800 hover:bg-gray-100 hover:text-blue-700'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Botón hamburguesa mobile */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="z-10 rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
                        aria-label={
                            menuOpen
                                ? 'Cerrar menú de navegación'
                                : 'Abrir menú de navegación'
                        }
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menú mobile */}
            {menuOpen && (
                <div
                    id="mobile-menu"
                    className="border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur-md md:hidden"
                >
                    <nav
                        className="space-y-1 px-4 py-4"
                        aria-label="Navegación móvil"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === '/'}
                                onClick={closeMenus}
                                className={navClass}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Trabajos desplegable mobile */}
                        <div>
                            <button
                                type="button"
                                onClick={() =>
                                    setTrabajosOpen(!trabajosOpen)
                                }
                                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-700"
                                aria-expanded={trabajosOpen}
                            >
                                <span>Trabajos</span>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-200 ${trabajosOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {trabajosOpen && (
                                <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                                    {trabajosLinks.map((link) => (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            onClick={closeMenus}
                                            className={navClass}
                                        >
                                            {link.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
