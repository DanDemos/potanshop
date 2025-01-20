import LoginPage from "../screens/auth/LoginPage";
import GameDetailPage from "../screens/gamedetail/GameDetailPage";
import GameDetailHandlerScreen from "../screens/GameDetailHandlerScreen";
import HomePage from "../screens/home/HomePage";
import HomeHandlerScreen from "../screens/HomeHandlerScreen";

export const RouteConfig = [
    {
        path: "/",
        element: <HomeHandlerScreen />,
        special_access: "user"
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/game-detail",
        element: <GameDetailHandlerScreen />
    },
];