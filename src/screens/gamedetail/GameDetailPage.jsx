import Button from "../../components/Button";
import DefaultLayout from "../../layout/DefaultLayout";
import GameDetailCarousel from "../../components/GameDetailCarousel";

const GameDetailPage = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <GameDetailCarousel />

      {/* Hot Products Section */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={"/src/assets/fire.png"} alt="" />
            Hot Products
          </h2>
          <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5 select-none">
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
                      src={"/src/assets/dia0.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                      src={"/src/assets/dia6.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                      src={"/src/assets/dia1.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                      src={"/src/assets/dia2.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                      src={"/src/assets/dia3.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                      src={"/src/assets/dia4.webp"}
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
                      className="group w-[100px] h-[30px]"
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

      {/* Hot Products Section */}
      <section className="py-5 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={"/src/assets/fire.png"} alt="" />
            Discounted Products
          </h2>
          <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-5 select-none">
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
                        20%
                      </span>
                    </div>
                    <img
                      src={"/src/assets/dia0.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                        20%
                      </span>
                    </div>
                    <img
                      src={"/src/assets/dia6.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                        20%
                      </span>
                    </div>
                    <img
                      src={"/src/assets/dia1.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                        20%
                      </span>
                    </div>
                    <img
                      src={"/src/assets/dia2.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                        20%
                      </span>
                    </div>
                    <img
                      src={"/src/assets/dia3.webp"}
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
                      className="group w-[100px] h-[30px]"
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
                        15%
                      </span>
                    </div>
                    <img
                      src={"/src/assets/dia4.webp"}
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
                      className="group w-[100px] h-[30px]"
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

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
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

export default GameDetailPage;
