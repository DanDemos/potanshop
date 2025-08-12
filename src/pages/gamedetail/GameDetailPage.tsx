import Button from "../../components/Button";
import GameDetailCarousel from "../../components/GameDetailCarousel";
import FirePng from "../../assets/fire.png";
import Dia0Png from "../../assets/dia0.webp";
import Dia1Png from "../../assets/dia1.webp";
import Dia2Png from "../../assets/dia2.webp";
import Dia3Png from "../../assets/dia3.webp";
import Dia4Png from "../../assets/dia4.webp";
// import Dia5Png from "../../assets/dia5.webp"
import Dia6Png from "../../assets/dia6.webp";
import DefaultLayout from "../../layout/DefaultLayout";
import { useTypedTranslation } from "../../translation/useTypedTranslation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import callApi from "../../services/api/apiClient";
import { useSearchParams } from "react-router-dom";
import BenefitsComponent from "../../components/BenefitsComponent";
import { RootState } from "../../redux/store/configureStore";

function GameDetailPage() {
  const { t, T } = useTypedTranslation();
  const [searchParams] = useSearchParams();
  const gameSlug = searchParams.get("id");

  const language = useSelector((state: RootState) => state.languageSlice);
  const gameDetail = useSelector(
    (state: RootState) => state?.game?.detail?.data
  );
  const gameProductList = useSelector(
    (state: RootState) => state?.game?.productList?.data
  );
  useEffect(() => {
    if (gameSlug) {
      callApi("game/detail")
        .withKeyParameter({ id: gameSlug })
        // .withHeaders({ "Accept-Language": language })
        .loadingGroup("homeLoading")
        .executeDispatch();

      callApi("game/productList")
        .withKeyParameter({ id: "mobilelegends" })
        // .withHeaders({ "Accept-Language": language })
        .loadingGroup("homeLoading")
        .executeDispatch();
    }
  }, [gameSlug]);

  return (
    <DefaultLayout loadingGroup={"homeLoading"}>
      {/* Hero Section */}
      <GameDetailCarousel />

      {/* Hot Products Section */}
      <section className="px-3 py-5 sm:px-0 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            <img className="w-7 h-6 me-1" src={FirePng} alt="fire icon" />
            {t(T.game_detail.hot_products)}
          </h2>
          <div className="max-w-4xl grid grid-cols-3 sm:grid-cols-5 sm:gap-5 gap-2 select-none">
            {gameProductList?.map((eachGameProduct, key) => (
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
                    {t(T.game_detail.hot)}
                  </span>
                </div>
                <img
                  src={eachGameProduct?.product_icon}
                  alt={eachGameProduct?.name}
                  className="object-cover rounded-xl mx-auto"
                />
                <div className="my-2">
                  <h3 className="font-semibold text-sm mb-1">{eachGameProduct?.name}</h3>
                  <p className="text-gray-600">{eachGameProduct?.price} MMK</p>
                </div>
                <Button
                  className="group w-full h-[30px] mx-auto"
                  onClick={() => null}
                >
                  {t(T.game_detail.buy_now)}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsComponent />
    </DefaultLayout>
  );
}

export default GameDetailPage;
