import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import type { RootState } from "../redux/store/configureStore";

export default function LanguageSync(): null {
  const language = useSelector((state: RootState) => state.languageSlice);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (language && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return null;
}
