import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/global.scss";

import AppRouter from "./router";

ReactDOM.render(<AppRouter />, document.querySelector("#app"));
