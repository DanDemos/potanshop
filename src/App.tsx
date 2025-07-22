import React, { useEffect } from "react";
import AppLayout from "./routers";
import LanguageSync from "./components/LanguageSync";
import callApi from "./services/api/apiClient";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/configureStore";

const App: React.FC = () => {
  const language = useSelector((state: RootState) => state?.languageSlice);
  const siteSetting = useSelector(
    (state: RootState) => state?.setting?.siteSetting?.data
  );
  useEffect(() => {
    (async () => {
      await callApi("setting/siteSetting")
        .withHeaders({ "Accept-Language": language })
        .loadingGroup("siteLoading")
        .executeDispatch();
    })();
  }, [language]);

  useEffect(() => {
    console.log(siteSetting?.data, "siteSetting");
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.rel = "icon";
    if (siteSetting?.data?.fav_icon) link.href = siteSetting?.data?.fav_icon;
    document.head.appendChild(link);
  }, [siteSetting]);

  return (
    <>
      <LanguageSync />
      <AppLayout />
    </>
  );
};

export default App;
