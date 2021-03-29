import * as React from "react";
import * as ReactDOM from "react-dom";
import AppBox from "./App";
// import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <AppBox />,
  document.getElementById("root"),
);
serviceWorker.unregister();
