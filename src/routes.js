import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";

const Routes = () => {
  return <Route exact path="/" component={Main} />;
};

export default Routes;
