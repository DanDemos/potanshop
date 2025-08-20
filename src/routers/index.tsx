import { BrowserRouter } from "react-router-dom";
import RouteList from "./router";
import React from "react";

export default function AppLayout(): React.ReactNode {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
}
