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
import { RootState } from "../../redux/store/configureStore";
import { BenefitsComponent } from "../../components/BenefitsComponent";

export default function PrivacyPolicyPage() {
  const { Translate, translation } = useTypedTranslation();

  const language = useSelector((state: RootState) => state.languageSlice);
  const privacyPolicy = useSelector(
    (state: RootState) => state?.others?.privacyPolicy?.data
  );
  useEffect(() => {
    callApi("others/privacyPolicy")
      .withHeaders({ "Accept-Language": language })
      .loadingGroup("homeLoading")
      .executeDispatch();
  }, []);

  return (
    <DefaultLayout loadingGroup={"homeLoading"}>
      {/* Hot Products Section */}
      <section className="px-3 py-5 sm:px-0 bg-gray-50">
        <div className="max-w-6xl flex flex-col items-center mx-auto text-center">
          <h2 className="flex items-center text-xl font-semibold mb-3">
            {Translate(translation.main.terms_and_conditions)}
          </h2>
          <h2 className="flex items-center text-xl font-semibold text-gray-500 mb-3">
            {Translate(translation.main.last_update)}
            {privacyPolicy?.updated_at}
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl ">
            <h2 className="flex items-center text-xl font-semibold mb-3">
              {privacyPolicy?.title}
            </h2>
            <h3 className="flex items-center text-lg mb-3">
              {privacyPolicy?.short_description}
            </h3>
            <p className="flex items-center text-md mb-3">
              {privacyPolicy?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsComponent />
    </DefaultLayout>
  );
}
