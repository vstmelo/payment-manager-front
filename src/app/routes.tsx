import React from "react";
import { Routes as RouteContainer, Route } from "react-router-dom";
const Login = React.lazy(() => import("../containers/Login"));

export function Routes(): JSX.Element {
  return (
    <React.Suspense fallback="Carregando">
      <RouteContainer>
        <Route path="/" element={<Login />} />
      </RouteContainer>
    </React.Suspense>
  );
}
