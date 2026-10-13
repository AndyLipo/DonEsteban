import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMenuItems } from './useMenuItems';
import MenuItem from './MenuItem';
import MenuFooter from './MenuFooter';
import LogoBtn from '../Navbar/LogoBtn';

const SideMenu = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const menuItems = useMenuItems();
    const [trabajosOpen, setTrabajosOpen] = useState(false);

    const handleMenuClick = (path) => {
        if (!path) return;

        navigate(path);
        onClose();
        setTrabajosOpen(false);
    };

    return (
        <>
            {/* Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50"
                    onClick={onClose}
                />
            )}

            {/* Side Menu */}
            <div
                className={`fixed left-0 top-0 z-50 h-full w-80 transform bg-gray-100 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-gray-600 transition-colors hover:text-gray-800"
                    aria-label="Cerrar menú"
                >
                    <X size={24} />
                </button>

                <LogoBtn />

                {/* Menu Items */}
                <nav className="py-6">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            {item.children ? (
                                <>
                                    {/* Trabajos */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setTrabajosOpen(!trabajosOpen)
                                        }
                                        className={`flex w-full items-center justify-between px-6 py-3 text-left transition-colors ${item.active
                                            ? 'font-semibold'
                                            : 'text-gray-800 hover:text-blue-700 hover:bg-gray-50'
                                            }`}
                                        aria-expanded={trabajosOpen}
                                    >
                                        <span>{item.name}</span>

                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform duration-200 ${trabajosOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Submenú */}
                                    {trabajosOpen && (
                                        <div className="ml-5 border-l-2 border-gray-300 py-1">
                                            {item.children.map((child) => (
                                                <button
                                                    key={child.path}
                                                    type="button"
                                                    onClick={() =>
                                                        handleMenuClick(child.path)
                                                    }
                                                    className={`block w-full px-6 py-3 text-left text-sm transition-colors ${child.active
                                                        ? 'font-semibold'
                                                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {child.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <MenuItem
                                    item={item}
                                    onClick={() =>
                                        handleMenuClick(item.path)
                                    }
                                />
                            )}
                        </div>
                    ))}
                </nav>

                <MenuFooter />
            </div>
        </>
    );
};

export default SideMenu;
