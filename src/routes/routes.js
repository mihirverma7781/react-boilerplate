import React from "react";
import { Route, Switch } from "react-router-dom";
import Test from "../pages/test";
import ProtectedRoute from "./protectedRoutes";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/test" component={Test} />
        <ProtectedRoute exact path="/" component={Test} />
      </Switch>
    </>
  );
};

export default Router;
