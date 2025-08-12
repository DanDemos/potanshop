import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../redux/store/configureStore";

export function GameDetailCarousel(): React.JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  const gameDetail = useSelector(
    (state: RootState) => state?.home?.gameDetail?.data
  );

  return (
    <div className="flex justify-center w-full ">
      <div className="relative flex max-w-full sm:max-w-[80%] h-auto bg-gray-200">
        <div className="w-full sm:w-2/3 h-full">
          {" "}
          {/* Carousel takes 2/3 of the screen width */}
          {gameDetail?.banner?.length > 0 ? (
            gameDetail?.banner?.length == 1 ? (
              <div className="relative w-full h-full">
                <img
                  src={gameDetail?.banner?.[0]?.banner_image}
                  alt="Banner 1"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h2 className="text-4xl font-bold">
                    {gameDetail?.banner?.[0]?.banner_title}
                  </h2>
                  <p className="mt-4 text-xl">
                    {gameDetail?.banner?.[0]?.banner_description}
                  </p>
                </div>
              </div>
            ) : (
              <Slider {...settings}>
                {gameDetail?.banner?.map((eachBanner, key) => {
                  console.log(gameDetail?.description, "eachBanner");

                  return (
                    <div key={key} className="relative w-full h-full">
                      <img
                        src={eachBanner?.banner_image}
                        alt="Banner 1"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-black opacity-30"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-4xl font-bold">
                          {eachBanner?.banner_title}
                        </h2>
                        <p className="mt-4 text-xl">
                          {eachBanner?.banner_description}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {/* 
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
            </div> */}
              </Slider>
            )
          ) : null}
        </div>

        <div className="hidden sm:block sm:w-1/3 px-8 py-7">
          {" "}
          {/* Right side for the paragraph */}
          <h3 className="text-md font-bold mb-2">
            {gameDetail?.data?.game_title}
          </h3>
          <div
            className="line-clamp-[17] overflow-hidden text-ellipsis"
            dangerouslySetInnerHTML={{ __html: gameDetail?.description }}
          />
        </div>
      </div>
    </div>
  );
}

export default GameDetailCarousel;
