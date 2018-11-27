import React from "react";
import { Route } from "react-router-dom";
import Temp from "./components/Temp";

const Routes = () => {
  return <Route exact path="/" component={Temp} />;
};

export default Routes;
