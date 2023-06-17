import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "../src/manager/store/configureStore";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./manager/action/blogAction";
import AppRouter from './Routers/AppRouter';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../src/assets/style/general.css";
import "../src/assets/style/style.css"
import 'animate.css';

const store: any = configureStore();

const result = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" />, document.getElementById("root") as HTMLElement);

store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root") as HTMLElement);
});