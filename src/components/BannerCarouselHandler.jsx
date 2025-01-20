import { useSelector } from "react-redux";
import BannerCarousel from "./BannerCarousel";
import BannerCarouselMM from "./BannerCarouselMM";

const BannerCarouselHandler = () => {
  const language = useSelector((state) => state?.languageSlice);
  if (language == "en") {
    return <BannerCarousel />;
  } else {
    return <BannerCarouselMM />;
  }
};

export default BannerCarouselHandler;
