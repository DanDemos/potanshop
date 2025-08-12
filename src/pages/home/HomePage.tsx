import { toast } from "react-toastify";
import BannerCarousel from "../../components/BannerCarousel";
import Button from "../../components/Button";
import { Link, useLocation } from "react-router-dom";
import FirePng from "../../assets/fire.png";
import Dia0Png from "../../assets/dia0.webp";
import Dia1Png from "../../assets/dia1.webp";
import Dia2Png from "../../assets/dia2.webp";
import Dia3Png from "../../assets/dia3.webp";
import Dia4Png from "../../assets/dia4.webp";
// import Dia5Png from "../../assets/dia5.webp"
import Dia6Png from "../../assets/dia6.webp";
import { useTypedTranslation } from "../../translation/useTypedTranslation";
import { RootState } from "../../redux/store/configureStore";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import callApi from "../../services/api/apiClient";
import Slider from "react-slick";
import DefaultLayout from "../../layout/DefaultLayout";
import BenefitsComponent from "../../components/BenefitsComponent";
import ToastComponent from "../../components/toast/ToastComponent";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover: false,
};

const placeholderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover: false,
};

// DelayedSlider helper component
const DelayedSlider = ({
  sliderKey,
  delay,
  settings,
  children,
  placeholder,
}) => {
  const [show, setShow] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (show)
    return (
      <Slider key={sliderKey} {...settings}>
        {children}
      </Slider>
    );
  return placeholder;
};

const HomePage = () => {
  const { t, T } = useTypedTranslation();
  const location = useLocation();

  const language = useSelector((state: RootState) => state?.languageSlice);
  const gameList = useSelector(
    (state: RootState) => state?.home?.gameList?.data
  );
  useEffect(() => {
    (async () => {
      await callApi("home/gameList")
        // .withHeaders({ "Accept-Language": language })
        .loadingGroup("homeLoading")
        .executeDispatch();
    })();
  }, [language]);

  return (
    <DefaultLayout loadingGroup={"homeLoading"}>
      {/* Hero Section */}
      <BannerCarousel />

      {/* Hot Games Section */}
      <section className="px-3 py-5 sm:px-0 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={FirePng} alt="" />
            {t(T.home.hot_games)}
          </h2>
          <div className="max-w-4xl grid grid-cols-3 sm:grid-cols-5 sm:gap-5 gap-3 select-none">
            {/* Hot Game Item */}
            {gameList?.map((game: any, key: number) => {
              return (
                <Link
                  key={key}
                  className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  to={`/game-detail?id=${game?.slug}`}
                  onClick={(e) => {}}
                  aria-disabled={false}
                  tabIndex={0}
                >
                  {game?.is_popular === 1 && (
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                  )}

                  <img
                    src={game?.game_icon}
                    alt="Game Icon"
                    className="w-full rounded-t-xl object-cover mx-auto"
                  />
                  <div className="my-2">
                    <h3 className="font-semibold text-sm">
                      {game?.game_title}
                    </h3>
                  </div>
                  <Button
                    className="group w-full h-[40px] mx-auto"
                    onClick={undefined}
                    disabled={false}
                  >
                    {t(T.home.top_up)}
                  </Button>
                </Link>
              );
            })}
            {/* Hardcoded coming soon games */}
            {[
              {
                img: "https://play-lh.googleusercontent.com/iP2i_f23Z6I-5hoL2okPS4SxOGhj0q61Iyb0Y1m4xdTsbnaCmrjs7xKRnL6o5R4h-Yg",
                title: t(T.home.games.genshin_impact),
              },
              {
                img: "https://play-lh.googleusercontent.com/FVQXdzxDphpLdMRqIc5kG4C_Dc4AEO7-9uKHPt85v5_6Sp3J4mTV1S6P3ipLEoK6lDer",
                title: t(T.home.games.summoners_war),
              },
              {
                img: "https://play-lh.googleusercontent.com/4b8E4y0776rFq9cUJTLjUnZAjRa2nd9kjGD_HH4sOYbKaEMsMPh3YCXVQ1871dBDtxIi",
                title: t(T.home.games.league_of_legend),
              },
              {
                img: "https://play-lh.googleusercontent.com/8-SniYIRaeki791FyNlRggRuIjlxBpYM9k6F7q1UL75FW7IEUSWridDbrXmX5DkTokRq",
                title: t(T.home.games.identity_v),
              },
            ].map((game, key) => (
              <Link
                key={key}
                className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                to={location.pathname}
                onClick={(e) => {
                  e.preventDefault();
                  toast.warn(
                    <ToastComponent
                      title={t(T.home.coming_soon)}
                      description={t(T.home.under_construction)}
                    />
                  );
                }}
                aria-disabled="true"
                tabIndex={0}
              >
                <img
                  src={game.img}
                  alt="Game Icon"
                  className="w-full rounded-t-xl object-cover mx-auto"
                />
                <div className="my-2">
                  <h3 className="font-semibold text-sm">{game.title}</h3>
                </div>
                <Button
                  className="group w-full h-[40px] mx-auto"
                  onClick={() => {
                    toast.warn(
                      <ToastComponent
                        title={t(T.home.coming_soon)}
                        description={t(T.home.under_construction)}
                      />
                    );
                  }}
                  disabled
                >
                  {t(T.home.top_up)}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Products Section */}
      <section className="px-3 py-5 sm:px-0 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={FirePng} alt="" />
            {t(T.home.hot_products)}
          </h2>
          <div className="max-w-4xl grid grid-cols-3 sm:grid-cols-6 sm:gap-5 gap-2 select-none">
            {/* Hot Product Item - hardcoded array */}
            {[
              {
                img: Dia0Png,
                title: t(T.home.products.twilight_pass),
                price: "$8.99",
              },
              {
                img: Dia6Png,
                title: t(T.home.products.weekly_diamond_pass),
                price: "$1.89",
              },
              {
                img: Dia1Png,
                title: t(T.home.products.diamonds_56),
                price: "$0.89",
              },
              {
                img: Dia2Png,
                title: t(T.home.products.diamonds_112),
                price: "$1.77",
              },
              {
                img: Dia3Png,
                title: t(T.home.products.diamonds_168),
                price: "$2.65",
              },
              {
                img: Dia4Png,
                title: t(T.home.products.diamonds_224),
                price: "$3.54",
              },
            ].map((product, key) => (
              <div
                key={key}
                className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
              >
                <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                  <span className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent">
                    Hot
                  </span>
                </div>
                <img
                  src={product.img}
                  alt="Game Icon"
                  className="object-cover rounded-xl mx-auto"
                />

                <div className="my-2">
                  <h3 className="font-semibold text-sm mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
                <Button
                  className="group w-full h-[30px] mx-auto"
                  onClick={() => null}
                >
                  {t(T.home.buy_now)}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game List Section */}
      <section className="px-3 py-5 sm:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-3">{t(T.home.game_list)}</h2>
            {/* <Button className="w-[110px] h-[33px]" onClick={() => null}>
              {t(T.home.see_all)}
            </Button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 select-none">
            {/* Product Item - hardcoded array with DelayedSlider */}
            {gameList?.data?.map((game, key: number) => (
              <div
                key={key}
                className="bg-white p-3 rounded-lg shadow-lg hover:scale-[101%] transition-scale duration-200 ease-in-out"
              >
                <DelayedSlider
                  sliderKey={key}
                  delay={key * 500}
                  settings={settings}
                  placeholder={
                    <Slider key="PlaceHolder" {...placeholderSettings}>
                      {game?.banner?.data?.map((each, key: number) => (
                        <div key={key} className="relative w-full h-full">
                          <img
                            src={each?.banner_image}
                            alt={each?.banner_title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </Slider>
                  }
                >
                  {game?.banner?.data?.map((each, key: number) => (
                    <div key={key} className="relative w-full h-full">
                      <img
                        src={each?.banner_image}
                        alt={each?.banner_title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </DelayedSlider>
                <h3 className="font-semibold text-xl mb-2">
                  {game.game_title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsComponent />
    </DefaultLayout>
  );
};

export default HomePage;
