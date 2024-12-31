import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-extrabold tracking-tight">
          <span className="text-sky-500">PotanShop</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to={"/"} className="hover:text-sky-500 transition-all">
            Home
          </Link>
          <Link to={"/"} className="hover:text-sky-500 transition-all">
            About
          </Link>
          <Link to={"/"} className="hover:text-sky-500 transition-all">
            Contact
          </Link>
          {/* Top Up Button */}
          {/* <Button className="w-[100px] h-[30px]" onClick={() => null}>
            Top Up
          </Button> */}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
