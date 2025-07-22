import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../redux/store/configureStore";

export function GameDetailCarousel(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const gameDetail = useSelector(
    (state: RootState) => state?.home?.gameList?.data
  );

  return (
    <div className="flex justify-center w-full ">
      <div className="relative flex max-w-full sm:max-w-[80%] h-auto bg-gray-200">
        <div className="w-full sm:w-2/3 h-full">
          {" "}
          {/* Carousel takes 2/3 of the screen width */}
          <Slider {...settings}>
            <div className="relative w-full h-full">
              <img
                src={
                  "https://play-lh.googleusercontent.com/2DGT6oNwvLpbiCuAL89jWdc3B1hFBx8dXHOTVsaToouE6uCmSHynk9cQSwPlbwvP2w=w1052-h592"
                }
                alt="Banner 1"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-4xl font-bold">Welcome to Our Store</h2>
                <p className="mt-4 text-xl">Shop the best deals today</p>
              </div>
            </div>

            <div className="relative w-full h-full">
              <img
                src={
                  "https://play-lh.googleusercontent.com/fsEuPPHl06NeuwssihxoCJdY_67dzoa8GxYbzbNFkH96FDS84789CcrQ-fE5t2yvKJM=w1052-h592"
                }
                alt="Banner 2"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-4xl font-bold">Exclusive Offers</h2>
                <p className="mt-4 text-xl">
                  Don’t miss out on amazing discounts
                </p>
              </div>
            </div>

            <div className="relative w-full h-full">
              <img
                src={
                  "https://play-lh.googleusercontent.com/8OaYiZQ_jORGwIg21BnwAQJD8cA4K3C-PPgFgsvdXVFbuxTCpb2qg64qWVmHGKv1JZ0=w1052-h592"
                }
                alt="Banner 3"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-4xl font-bold">New Arrivals</h2>
                <p className="mt-4 text-xl">Fresh products just for you</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="hidden sm:block sm:w-1/3 px-8 pt-7">
          {" "}
          {/* Right side for the paragraph */}
          <h3 className="text-md font-bold mb-2">
            {gameDetail?.data?.game_title}
          </h3>
          <p className="text-xs">{gameDetail?.data?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetailCarousel;
