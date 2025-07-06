// src/components/BannerCarousel.tsx
import React from "react";
import Slider from "react-slick";
import callApi from "../services/api/apiClient";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";
import { useTypedTranslation } from "../translation/useTypedTranslation";

const BannerCarousel: React.FC = () => {
  const { t, T } = useTypedTranslation();
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

  const promotion = useSelector((state : RootState) => state?.auth?.promotion);

  // Only call API if promotion data doesn't exist or is expired
  React.useEffect(() => {
    if (!promotion?.data) {
      callApi("auth/promotion").loadingGroup("promotion").executeDispatch();
    }
  }, [promotion?.data]);

  return (
    <Slider {...settings}>
      <div className="relative w-full h-full">
        <img
          src={"https://pbs.twimg.com/media/Dzynpt7W0AAS6In.jpg"}
          alt="Banner 1"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-lg sm:text-4xl font-bold">
            {t(T.banner.welcome)}
          </h2>
          <p className="mt-4 text-sm sm:text-xl">{t(T.banner.shop_best_deals)}</p>
        </div>
      </div>

      <div className="relative w-full h-full">
        <img
          src={
            "https://assetsio.gnwcdn.com/Lol_W_R.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
          }
          alt="Banner 2"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-lg sm:text-4xl font-bold">{t(T.banner.exclusive_offers)}</h2>
          <p className="mt-4 text-xs sm:text-xl">
            {t(T.banner.dont_miss_discounts)}
          </p>
        </div>
      </div>

      <div className="relative w-full h-full">
        <img
          src={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23f374c7-7ea4-40f8-96e3-1d379018049a/dbfkl0s-266a511e-5f07-4b28-870a-f58c91c724e5.png/v1/fill/w_1200,h_400,q_80,strp/xayah_and_rakan_banner__1200_x_400__by_mempsu_dbfkl0s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDAwIiwicGF0aCI6IlwvZlwvMjNmMzc0YzctN2VhNC00MGY4LTk2ZTMtMWQzNzkwMTgwNDlhXC9kYmZrbDBzLTI2NmE1MTFlLTVmMDctNGIyOC04NzBhLWY1OGM5MWM3MjRlNS5wbmciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._yG9GaOB18t_z8hv12u8W_GDqxldpwSnMozIPDdPno0"
          }
          alt="Banner 3"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-lg sm:text-4xl font-bold">{t(T.banner.new_arrivals)}</h2>
          <p className="mt-4 text-xs sm:text-xl">{t(T.banner.fresh_products)}</p>
        </div>
      </div>
    </Slider>
  );
};

export default BannerCarousel;
