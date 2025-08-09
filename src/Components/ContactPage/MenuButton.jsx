import React from 'react';

const MenuButton = ({ onClick, isOpen }) => {
    if (isOpen) return null;

    return (
        <button
            onClick={onClick}
            className="text-white hover:text-[#3dd6af] transition-colors"
            aria-label="Abrir menú"
        >
            <div className="space-y-1">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
            </div>
        </button>
    );
};

export default MenuButton;