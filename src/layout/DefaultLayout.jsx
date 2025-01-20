import Header from "./header/Header.jsx";
import HeaderMM from "./header/HeaderMM.jsx";
import Footer from "./footer/Footer.jsx";
import FooterMM from "./footer/Footer copy.jsx";
import SnowflakesEffect from "./effect/SnowflakesEffect.jsx";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  const language = useSelector((state) => state?.languageSlice);

  return (
    <div className="flex flex-col min-h-screen">
      <SnowflakesEffect />
      {/* Top Bar */}
      {/* <TopBar /> */}

      {/* Header */}
      {language == "en" ? <Header /> : <HeaderMM />}

      {/* Main Content Section */}
      <main className="">{children}</main>

      {/* Footer */}
      {language == "en" ? <Footer /> : <FooterMM />}
    </div>
  );
};

export default DefaultLayout;
