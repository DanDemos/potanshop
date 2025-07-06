import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translation';
import { store } from './redux/store/configureStore';

// Get initial language from Redux store
const getInitialLanguage = () => {
  try {
    const state = store.getState();
    return state?.languageSlice || 'en';
  } catch {
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translations.en
      },
      mm: {
        translation: translations.mm
      }
    },
    lng: getInitialLanguage(), // Get language from Redux
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    },
    debug: import.meta.env.MODE === 'development'
  });

export default i18n; 