import localStorage from "redux-persist/es/storage";
import { useLocation } from "react-router-dom";
import { ProfilePopupSlice } from "../helper/customSlice";
import { selectStore } from "./selectStore";
import { dispatchStore } from "./dispatchStore";
import { useEffect } from "react";

const LogoutToHomeUrls: string[] = ["/checkout", "add-to-card"];
const LogoutToLoginUrls: string[] = ["/profile"];

function Logout(): null {
  const token = selectStore("AccessToken");

  useEffect(() => {
    dispatchStore(ProfilePopupSlice.actions.setShowMbProfile(false));
    localStorage.removeItem("persist:root");

    setTimeout(() => {
      if (LogoutToHomeUrls.some(url => window.location.href.includes(url))) {
        window.location.replace("/");
      } else if (LogoutToLoginUrls.some(url => window.location.href.includes(url))) {
        window.location.replace("/login");
      } else if (token) {
        window.location.reload();
      } else {
        window.location.replace("/login");
      }
    }, 1000);
  }, [token]);

  return null;
}

export default Logout;
