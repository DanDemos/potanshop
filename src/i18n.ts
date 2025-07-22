import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translation";
import { RootState, store } from "./redux/store/configureStore";

// Define the shape of your language slice in Redux
type LanguageState = string | undefined;

function getInitialLanguage(): string {
  try {
    const state = store.getState() as unknown as RootState;
    const language: LanguageState = state?.languageSlice;
    return language ?? "en";
  } catch {
    return "en";
  }
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translations.en },
    mm: { translation: translations.mm },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  debug: import.meta.env.MODE === "development",
});

export default i18n;
