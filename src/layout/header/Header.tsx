import { Link } from "react-router-dom";
import DiamondIcon from "../../assets/DiamondIcon.png";
import { useState } from "react";
import { languageSlice } from "../../helper/customSlice";
import { useSelector } from "react-redux";
import { useTypedTranslation } from "../../translation/useTypedTranslation";
import { RootState } from "../../redux/store/configureStore";
import { dispatchStore } from "../../lib/dispatchStore";

const Header = () => {
  const { i18n, t, T } = useTypedTranslation();
  const language = useSelector((state: RootState) => state?.languageSlice);
  const siteSetting = useSelector(
    (state: RootState) => state?.setting?.siteSetting?.data
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handlelanguageSelect = (lang) => {
    dispatchStore(languageSlice?.actions?.setLanguage(lang));
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className="z-[3] fixed w-full bg-white text-gray-800 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to={"/"} className="text-2xl font-extrabold tracking-tight">
          <div className="flex items-center gap-1">
            {siteSetting?.data?.site_logo && (
              <img
                className="w-[35px] h-[35px]"
                src={siteSetting?.data?.site_logo}
                alt="Site Logo"
              />
            )}
            <span className="text-sky-500">{siteSetting?.data?.site_name}</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link to={"/"} className="hover:text-sky-500 transition-all">
            {t(T.header.home)}
          </Link>
          <Link to={"/"} className="hover:text-sky-500 transition-all">
            {t(T.header.about)}
          </Link>
          <Link to={"/"} className="hover:text-sky-500 transition-all">
            {t(T.header.contact)}
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="focus:outline-none flex items-center"
            >
              <img
                src={
                  language == "en"
                    ? "https://dandemos.github.io/image-hosting-repo/united-kingdom.png"
                    : "https://dandemos.github.io/image-hosting-repo/myanmar.png"
                }
                className="w-6 h-6"
              />
            </button>

            {isLanguageOpen && (
              <div className="absolute left-[-16px] mt-2 w-14 bg-white shadow-lg overflow-hidden z-[1]">
                <button
                  onClick={() => handlelanguageSelect("en")}
                  className="w-full flex justify-center items-center py-1 hover:bg-sky-200"
                >
                  <img
                    src="https://dandemos.github.io/image-hosting-repo/united-kingdom.png"
                    alt="en"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  onClick={() => handlelanguageSelect("mm")}
                  className="w-full flex justify-center items-center py-1 hover:bg-sky-200"
                >
                  <img
                    src="https://dandemos.github.io/image-hosting-repo/myanmar.png"
                    alt="mm"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-800 focus:outline-none"
          >
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

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-sky-400 to-white text-white shadow-xl transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-[4]`}
        >
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Content */}
          <div className="mt-16 flex flex-col items-center space-y-6">
            <img
              src={DiamondIcon}
              alt="Logo"
              className="w-16 h-16 bg-white p-2 shadow-md rounded-tl-xl rounded-br-xl"
            />
            <h2 className="text-lg font-semibold">
              {t(T.header.welcome_message)}
            </h2>
            <nav className="flex flex-col justify-center items-center w-full space-y-4 text-center">
              <Link
                to={"/"}
                onClick={toggleSidebar}
                className="block w-[70%] py-2 px-4 bg-white text-sky-500 rounded-lg hover:bg-opacity-90 transition-all"
              >
                {t(T.header.home)}
              </Link>
              <Link
                to={"/"}
                onClick={toggleSidebar}
                className="block w-[70%] py-2 px-4 bg-white text-sky-500 rounded-lg hover:bg-opacity-90 transition-all"
              >
                {t(T.header.about)}
              </Link>
              <Link
                to={"/"}
                onClick={toggleSidebar}
                className="block w-[70%] py-2 px-4 bg-white text-sky-500 rounded-lg hover:bg-opacity-90 transition-all"
              >
                {t(T.header.contact)}
              </Link>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handlelanguageSelect("en")}
                  className={`w-full flex justify-center items-center py-1 ${
                    language == "mm" && "opacity-50"
                  }`}
                >
                  <img
                    src="https://dandemos.github.io/image-hosting-repo/united-kingdom.png"
                    alt="en"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  onClick={() => handlelanguageSelect("mm")}
                  className={`w-full flex justify-center items-center py-1 ${
                    language == "en" && "opacity-50"
                  }`}
                >
                  <img
                    src="https://dandemos.github.io/image-hosting-repo/myanmar.png"
                    alt="mm"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Background Overlay */}
        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-[3]"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
