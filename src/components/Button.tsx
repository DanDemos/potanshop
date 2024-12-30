import React, { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode; // Accepts any child elements
  onClick?: () => void;
  style?: CSSProperties;
  className?: string; // Add className prop
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style, className }) => {
  return (
    <button
      className={`container relative backdrop-blur-sm w-[160px] h-[60px] ${className || ''}`} // Merge className prop
      style={style} // Inline styles to overwrite defaults
      onClick={onClick}
    >
      <a className="group glassbutton relative block w-full h-full no-underline text-base uppercase font-raleway tracking-wide overflow-hidden bg-white/10 shadow-[4px_4px_20px_rgba(0,0,0,0.3)] hover:text-[#298fef]">
        <span className="absolute block transition-all duration-500 ease-in-out top-0 left-0 w-0 h-px bg-[#2c7bd3] group-hover:w-full group-hover:translate-x-full"></span>
        <span className="absolute block transition-all duration-500 ease-in-out top-0 left-0 w-px h-0 bg-[#2c7bd3] group-hover:h-full group-hover:translate-y-full"></span>
        <span className="absolute block transition-all duration-500 ease-in-out bottom-0 right-0 w-0 h-px bg-[#2c7bd3] group-hover:w-full group-hover:translate-x-[-100%]"></span>
        <span className="absolute block transition-all duration-500 ease-in-out bottom-0 right-0 w-px h-0 bg-[#2c7bd3] group-hover:h-full group-hover:-translate-y-full"></span>
        <span className="w-full h-full flex justify-center items-center cursor-pointer select-none">
          {children}
        </span>
      </a>
    </button>
  );
};

export default Button;
