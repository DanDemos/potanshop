import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const LanguageSync = () => {
  const language = useSelector((state) => state?.languageSlice);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return null; // This component doesn't render anything
};

export default LanguageSync; 