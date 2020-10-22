//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let texto = "A ver que ocurre";

const container = document.querySelector("#app"); // UBICACION DONDE SE VA A RENDERIZAR
const component = <Home />; // ARCHIVO QUE SE VA A RENDERIZAR
ReactDOM.render(component, container);
