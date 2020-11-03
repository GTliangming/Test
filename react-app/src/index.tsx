import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import "./assets/css/index.scss";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <App />,
  document.getElementById("root"),
);
serviceWorker.unregister();
