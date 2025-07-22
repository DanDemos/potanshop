import { useTypedTranslation } from "../translation/useTypedTranslation";



export function BenefitsComponent() {
  const { t, T } = useTypedTranslation();

  return (
    <section className="bg-gray-100 px-3 py-16 sm:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            {t(T.home.why_shop_with_us)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                {t(T.home.free_shipping)}
              </h3>
              <p>{t(T.home.free_shipping_desc)}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                {t(T.home.quality_guarantee)}
              </h3>
              <p>{t(T.home.quality_guarantee_desc)}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
                {t(T.home.customer_support)}
              </h3>
              <p>{t(T.home.customer_support_desc)}</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BenefitsComponent