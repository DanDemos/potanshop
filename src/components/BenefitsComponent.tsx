import { useSelector } from "react-redux";
import { useTypedTranslation } from "../translation/useTypedTranslation.ts";
import { RootState } from "../redux/store/configureStore";

export function BenefitsComponent(): React.JSX.Element {
  const { Translate, translation } = useTypedTranslation();

  const siteSetting = useSelector(
    (state: RootState) => state?.setting?.siteSetting?.data
  );

  return (
    <section className="bg-gray-100 px-5 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          {Translate(translation.home.why_shop_with_us)}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {siteSetting?.free_shipping ? (
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                {Translate(translation.home.free_shipping)}
              </h3>
              <p>{siteSetting?.free_shipping}</p>
            </div>
          ) : (
            <div />
          )}

          {siteSetting?.quality_guarantee ? (
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                {Translate(translation.home.quality_guarantee)}
              </h3>
              <p>{siteSetting?.quality_guarantee}</p>
            </div>
          ) : (
            <div />
          )}

          {siteSetting?.customer_support ? (
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                {Translate(translation.home.quality_guarantee)}
              </h3>
              <p>{siteSetting?.customer_support}</p>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
