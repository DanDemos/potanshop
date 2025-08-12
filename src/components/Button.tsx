import React, { CSSProperties, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string; // Accept className as a prop
  disabled?: boolean;
}

// Utility function to handle dynamic tailwind classes with arbitrary values (e.g., w-[100px], h-[50px])
const resolveClassConflicts = (defaultClasses: string, passedClasses: string) => {
  const defaultClassList = defaultClasses.split(' ');
  const passedClassList = passedClasses.split(' ');

  // Create a regex pattern to match all classes that have dynamic values (e.g., w-[100px], h-[50px])
  const dynamicClassPattern = /([a-zA-Z]+-\[\d+px\])/;

  // Process default and passed classes
  const processedClassList = defaultClassList?.map((defaultClass) => {
    // Check if the class matches the pattern for dynamic values (e.g., w-[100px])
    if (dynamicClassPattern.test(defaultClass)) {
      // Try to find the same class in passedClassList
      const passedClass = passedClassList.find((cls) => dynamicClassPattern.test(cls) && cls.includes(defaultClass.match(dynamicClassPattern)![0].split('-[')[0]));
      if (passedClass) {
        return passedClass; // If the passed class exists with a different value, use it
      }
    }
    return defaultClass; // Keep the default class if no conflict
  });

  // Combine processed default classes and passed classes, ensuring no conflicts
  const finalClasses = [...new Set([...processedClassList, ...passedClassList])].join(' ');
  return finalClasses;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, style, className, disabled }) => {
  // Default className with arbitrary values
  const defaultClassName = 'container relative backdrop-blur-xs w-[160px] h-[60px] bg-[#4e4c57]/100 text-white shadow-[4px_4px_20px_rgba(0,0,0,0)]';

  // If className is passed, process and resolve conflicts
  const finalClassName = className ? resolveClassConflicts(defaultClassName, className) : defaultClassName;

  return (
    <button
      className={finalClassName} // Apply the resolved className
      style={style} // Inline styles to overwrite defaults
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <span className={`group glassbutton relative block w-full h-full no-underline text-sm tracking-wide overflow-hidden hover:text-[#298fef] group-hover:text-[#298fef] ${finalClassName}`}>
        <span className="absolute block transition-all duration-500 ease-in-out top-0 left-0 w-0 h-[4px] bg-[#2c7bd3] group-hover:w-full group-hover:translate-x-full"></span>
        <span className="absolute block transition-all duration-500 ease-in-out top-0 left-0 w-[4px] h-0 bg-[#2c7bd3] group-hover:h-full group-hover:translate-y-full"></span>
        <span className="absolute block transition-all duration-500 ease-in-out bottom-0 right-0 w-0 h-[4px] bg-[#2c7bd3] group-hover:w-full group-hover:translate-x-[-100%]"></span>
        <span className="absolute block transition-all duration-500 ease-in-out bottom-0 right-0 w-[4px] h-0 bg-[#2c7bd3] group-hover:h-full group-hover:-translate-y-full"></span>
        <span className="w-full h-full flex justify-center items-center cursor-pointer select-none">
          {children}
        </span>
      </span>
    </button>
  );
};

export default Button;
