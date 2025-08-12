import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMenuItems } from './useMenuItems';
import MenuItem from './MenuItem';
import MenuFooter from './MenuFooter';
import LogoBtn from '../Navbar/LogoBtn';

const SideMenu = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const menuItems = useMenuItems();

    const handleMenuClick = (path) => {
        navigate(path);
        onClose();
    };

    return (
        <>
            {/* Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={onClose}
                />
            )}

            {/* Side Menu */}
            <div className={`fixed left-0 top-0 h-full w-80 bg-gray-100 shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Cerrar menú"
                >
                    <X size={24} />
                </button>

                <LogoBtn />

                {/* Menu Items */}
                <nav className="py-6">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            item={item}
                            onClick={() => handleMenuClick(item.path)}
                        />
                    ))}
                </nav>

                <MenuFooter />
            </div>
        </>
    );
};

export default SideMenu;