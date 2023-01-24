import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthenticated } from "../hooks/useAuthenticated.hook";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = useAuthenticated();
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Route {...rest} render={() => <Component />} />
    </>
  );
};

export default ProtectedRoute;
