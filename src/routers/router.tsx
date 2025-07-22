import React, { ReactNode } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { RouteConfig } from "./router-config";

interface SpecialAccessRouteProps {
  children: ReactNode;
  special_access?: string;
}

export const SpecialAccessRoute: React.FC<SpecialAccessRouteProps> = ({
  children,
  special_access,
}) => {
  // Example access check (replace with your real logic)
  const isLoggedIn = true; // simulate login status

  if (special_access === "user") {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
  }

  return <>{children}</>;
};

const RouteList: React.FC = () => {
  return (
    <Routes>
      {RouteConfig?.map(({ path, element, special_access }, key) => (
        <Route
          path={path}
          key={key}
          element={
            special_access ? (
              <SpecialAccessRoute special_access={special_access}>
                {element}
              </SpecialAccessRoute>
            ) : (
              element
            )
          }
        />
      ))}
    </Routes>
  );
};

export default RouteList;
