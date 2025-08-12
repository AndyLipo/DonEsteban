import React from 'react';

const MenuFooter = () => {
    const badges = ['Privacy', 'Disclaimer', '© 2025 — Copyright'];

    return (
        <div className="absolute bottom-6 left-6 flex space-x-2">
            {badges.map((badge, index) => (
                <div
                    key={index}
                    className=" text-black px-2 py-1 rounded text-xs font-medium"
                >
                    {badge}
                </div>
            ))}
        </div>
    );
};

export default MenuFooter;