import { useSelector } from "react-redux";
import HomePage from "./home/HomePage";
import HomePageMM from "./home/HomePageMM";

const HomeHandlerScreen = () => {
  const language = useSelector((state) => state?.languageSlice);

  if (language == "en") {
    return <HomePage />;
  } else {
    return <HomePageMM />;
  }
};

export default HomeHandlerScreen;
