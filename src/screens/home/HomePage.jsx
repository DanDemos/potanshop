import { toast } from "react-toastify";
import BannerCarousel from "../../components/BannerCarousel";
import Button from "../../components/Button";
import DefaultLayout from "../../layout/DefaultLayout";
import { Link } from "react-router-dom";
import FirePng from "../../assets/fire.png"
import Dia0Png from "../../assets/dia0.webp"
import Dia1Png from "../../assets/dia1.webp"
import Dia2Png from "../../assets/dia2.webp"
import Dia3Png from "../../assets/dia3.webp"
import Dia4Png from "../../assets/dia4.webp"
// import Dia5Png from "../../assets/dia5.webp"
import Dia6Png from "../../assets/dia6.webp"

const HomePage = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <BannerCarousel />

      {/* Hot Games Section */}
      <section className="px-3 py-5 sm:px-0 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={FirePng} alt="" />
            Hot Games
          </h2>
          <div className="max-w-4xl grid grid-cols-3 sm:grid-cols-5 sm:gap-5 gap-3 select-none">
            {/* Hot Game Item */}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <Link
                    key={key}
                    className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                    to={"/game-detail"}
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={
                        "https://play-lh.googleusercontent.com/F9cgJKcHDpODaCSGVMYjQMuCp3Bh8ithjTmfotUTRqXe_7jMZM81lrlxo6RAz9vroK8=w480-h960"
                      }
                      alt="Hot Product 1"
                      className="w-full rounded-t-xl object-cover mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm">Mobile Legends</h3>
                    </div>
                    <Button className="group w-full h-[40px] mx-auto">
                      Top Up
                    </Button>
                  </Link>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <Link
                    key={key}
                    className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                    to={"/"}
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={
                        "https://play-lh.googleusercontent.com/iP2i_f23Z6I-5hoL2okPS4SxOGhj0q61Iyb0Y1m4xdTsbnaCmrjs7xKRnL6o5R4h-Yg"
                      }
                      alt="Hot Product 1"
                      className="w-full rounded-t-xl object-cover mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm">Genshin Impact</h3>
                    </div>
                    <Button
                      className="group w-full h-[40px] mx-auto"
                      onClick={() =>
                        toast.warn(
                          <div className="flex flex-col gap-0 ms-2">
                            <h1 className="text-sm font-semibold">
                              Coming Soon
                            </h1>
                            <p className="text-xs">Under construction</p>
                          </div>
                        )
                      }
                    >
                      Top Up
                    </Button>
                  </Link>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <Link
                    key={key}
                    className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                    to={"/"}
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={
                        "https://play-lh.googleusercontent.com/FVQXdzxDphpLdMRqIc5kG4C_Dc4AEO7-9uKHPt85v5_6Sp3J4mTV1S6P3ipLEoK6lDer"
                      }
                      alt="Hot Product 1"
                      className="w-full rounded-t-xl object-cover mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm">Summoners War</h3>
                    </div>
                    <Button
                      className="group w-full h-[40px] mx-auto"
                      onClick={() =>
                        toast.warn(
                          <div className="flex flex-col gap-0 ms-2">
                            <h1 className="text-sm font-semibold">
                              Coming Soon
                            </h1>
                            <p className="text-xs">Under construction</p>
                          </div>
                        )
                      }
                    >
                      Top Up
                    </Button>
                  </Link>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <Link
                    key={key}
                    className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                    to={"/"}
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={
                        "https://play-lh.googleusercontent.com/mMlDm75bTphvVBGP9bW-JN-3ejks1yEv9rXlz9n0SRNvtS6h4tWZeULwoel-BiXOMJE"
                      }
                      alt="Hot Product 1"
                      className="w-full rounded-t-xl object-cover mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm">League of Legend</h3>
                    </div>
                    <Button
                      className="group w-full h-[40px] mx-auto"
                      onClick={() =>
                        toast.warn(
                          <div className="flex flex-col gap-0 ms-2">
                            <h1 className="text-sm font-semibold">
                              Coming Soon
                            </h1>
                            <p className="text-xs">Under construction</p>
                          </div>
                        )
                      }
                    >
                      Top Up
                    </Button>
                  </Link>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <Link
                    key={key}
                    className="group relative flex flex-col justify-between p-3 sm:p-0 bg-white shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                    to={"/"}
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={
                        "https://play-lh.googleusercontent.com/8-SniYIRaeki791FyNlRggRuIjlxBpYM9k6F7q1UL75FW7IEUSWridDbrXmX5DkTokRq"
                      }
                      alt="Hot Product 1"
                      className="w-full rounded-t-xl object-cover mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm">Idendity V</h3>
                    </div>
                    <Button
                      className="group w-full h-[40px] mx-auto"
                      onClick={() =>
                        toast.warn(
                          <div className="flex flex-col gap-0 ms-2">
                            <h1 className="text-sm font-semibold">
                              Coming Soon
                            </h1>
                            <p className="text-xs">Under construction</p>
                          </div>
                        )
                      }
                    >
                      Top Up
                    </Button>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Hot Products Section */}
      <section className="px-3 py-5 sm:px-0 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={FirePng} alt="" />
            Hot Products
          </h2>
          <div className="max-w-4xl grid grid-cols-3 sm:grid-cols-6 sm:gap-5 gap-2 select-none">
            {/* Hot Product Item */}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={Dia0Png}
                      alt="Hot Product 1"
                      className="object-cover rounded-xl mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm mb-1">
                        Twilight Pass
                      </h3>
                      <p className="text-gray-600">$8.99</p>
                    </div>
                    <Button
                      className="group w-full h-[30px] mx-auto"
                      onClick={() => null}
                    >
                      Buy Now
                    </Button>
                  </div>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={Dia6Png}
                      alt="Hot Product 1"
                      className="object-cover rounded-xl mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm mb-1">
                        Weekly Diamond Pass
                      </h3>
                      <p className="text-gray-600">$1.89</p>
                    </div>
                    <Button
                      className="group w-full h-[30px] mx-auto"
                      onClick={() => null}
                    >
                      Buy Now
                    </Button>
                  </div>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={Dia1Png}
                      alt="Hot Product 1"
                      className="object-cover rounded-xl mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm mb-1">
                        56 Diamonds
                      </h3>
                      <p className="text-gray-600">$0.89</p>
                    </div>
                    <Button
                      className="group w-full h-[30px] mx-auto"
                      onClick={() => null}
                    >
                      Buy Now
                    </Button>
                  </div>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={Dia2Png}
                      alt="Hot Product 1"
                      className="object-cover rounded-xl mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm mb-1">
                        112 Diamonds
                      </h3>
                      <p className="text-gray-600">$1.77</p>
                    </div>
                    <Button
                      className="group w-full h-[30px] mx-auto"
                      onClick={() => null}
                    >
                      Buy Now
                    </Button>
                  </div>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={Dia3Png}
                      alt="Hot Product 1"
                      className="object-cover rounded-xl mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm mb-1">
                        168 Diamonds
                      </h3>
                      <p className="text-gray-600">$2.65</p>
                    </div>
                    <Button
                      className="group w-full h-[30px] mx-auto"
                      onClick={() => null}
                    >
                      Buy Now
                    </Button>
                  </div>
                );
              })}
            {Array(1)
              .fill()
              .map((_, key) => {
                return (
                  <div
                    key={key}
                    className="group relative flex flex-col justify-between items-center bg-white p-3 rounded-xl shadow-md hover:scale-[98%] transition-scale duration-200 ease-in-out"
                  >
                    <div className="absolute -right-[0.313rem] -top-[0.313rem] z-[1] overflow-hidden w-[4.688rem] h-[4.688rem] text-right">
                      <span
                        className="absolute top-[1.188rem] -right-[1.313rem] bg-gradient-to-b from-red-500 to-red-700 text-white text-[0.625rem] font-bold uppercase text-center leading-[1.25rem] shadow-md w-[6.25rem] transform rotate-45 
                      before:absolute before:left-0 before:top-full before:z-[-1] before:content-[''] before:block before:border-l-[3px] before:border-l-red-500 before:border-r-[3px] before:border-r-transparent before:border-b-[3px] before:border-b-transparent before:border-t-[3px] before:border-t-red-500 
                      after:absolute after:top-full after:right-0 after:z-[-1] after:content-[''] after:border-l-[0.188rem] after:border-l-transparent after:border-r-[0.188rem] after:border-r-red-500 after:border-t-[0.188rem] after:border-t-red-500 after:border-b-[0.188rem] after:border-b-transparent"
                      >
                        Hot
                      </span>
                    </div>
                    <img
                      src={Dia4Png}
                      alt="Hot Product 1"
                      className="object-cover rounded-xl mx-auto"
                    />
                    <div className="my-2">
                      <h3 className="font-semibold text-sm mb-1">
                        224 Diamonds
                      </h3>
                      <p className="text-gray-600">$3.54</p>
                    </div>
                    <Button
                      className="group w-full h-[30px] mx-auto"
                      onClick={() => null}
                    >
                      Buy Now
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Game List Section */}
      <section className="px-3 py-5 sm:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-3">Game List</h2>
            <Button className="w-[110px] h-[33px]" onClick={() => null}>
              See All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 select-none">
            {/* Product Item */}
            {Array(8)
              .fill()
              .map((_, key) => {
                return (
                  <div key={key} className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src={
                        "https://cdn2.omg.rocks/i/15f36db9f43170/mobile-legends-cover.png?w=768"
                      }
                      alt="Product 1"
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-xl mb-2">Game 1</h3>
                  </div>
                );
              })}
            {/* Repeat Product Items for more products */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 px-3 py-16 sm:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p>On all orders over $50.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p>We ensure high-quality products for every customer.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p>24/7 support for all your shopping needs.</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default HomePage;
