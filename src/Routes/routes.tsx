import React from "react";
import { Switch , Route } from "react-router-dom";
import Home from "../Views/Home/home";



export const baseUrl = "/";

export const Rutas: React.FC = () => (
  <Switch >
    <Route exact path={baseUrl} component={Home} />
   
  </Switch >
);

export default Rutas;
