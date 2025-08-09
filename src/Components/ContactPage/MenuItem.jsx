import React from 'react';

const MenuItem = ({ item, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 border-l-4 ${item.active
                ? 'border-[#3dd6af] bg-yellow-50 text-blue-600 font-medium'
                : 'border-transparent'
            }`}
    >
        {item.name}
    </button>
);

export default MenuItem;