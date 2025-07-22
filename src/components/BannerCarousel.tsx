// src/components/BannerCarousel.tsx
import React from "react";
import Slider from "react-slick";
import callApi from "../services/api/apiClient";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";
import { useTypedTranslation } from "../translation/useTypedTranslation";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
};
const BannerCarousel: React.FC = () => {
  const { t, T } = useTypedTranslation();

  const language = useSelector((state: RootState) => state?.languageSlice);
  const homeBanners = useSelector(
    (state: RootState) => state?.home?.homeBanners?.data
  );

  React.useEffect(() => {
    callApi("home/homeBanners")
      .withHeaders({ "Accept-Language": language })
      .loadingGroup("homeLoading")
      .executeDispatch();
  }, [language]);

  return (
    <Slider {...settings}>
      {homeBanners?.data?.map((each: any, key: number) => (
        <div key={key} className="relative w-full h-full">
          <img
            src={each?.banner_image}
            alt="Banner 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-lg sm:text-4xl font-bold">
              {each?.banner_title}
            </h2>
            <p className="mt-4 text-sm sm:text-xl">
              {each?.banner_description}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerCarousel;
