import React from "react";

const NavItem = ({ text, icon, isSelected = false, onClick }) => {
  return (
    <div
      className={`w-full flex flex-row items-center gap-3 py-2 text-base justify-center md:justify-start px-4 font-medium rounded-md cursor-pointer transition duration-200 ease-in-out 
        ${isSelected ? "bg-rose-700 text-slate-100 shadow-md font-semibold" : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"}
      `}
      onClick={onClick}
      role="button"
      aria-label={text}  // Added aria-label for accessibility
    >
      {/* Icon */}
      <span className={`text-lg md:text-xl transition duration-200 ${isSelected ? 'text-slate-100' : 'text-gray-700'}`}>
        {icon}
      </span>

      {/* Text */}
      <span className="hidden md:block text-sm md:text-base transition-all duration-200">
        {text}
      </span>
    </div>
  );
};

export default NavItem;
