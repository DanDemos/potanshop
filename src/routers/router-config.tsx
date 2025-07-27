import { ReactElement } from "react";
import LoginPage from "../pages/auth/LoginPage";
import HomePage from "../pages/home/HomePage";
import GameDetailPage from "../pages/gamedetail/GameDetailPage";

interface IRouteConfig {
  path: string;
  element: ReactElement;
  special_access?: string; // Optional, if you plan to use it
}

export const RouteConfig: IRouteConfig[] = [
  {
    path: "/",
    element: <HomePage />,
    // special_access: "user"
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/game-detail",
    element: <GameDetailPage />
  }
];
