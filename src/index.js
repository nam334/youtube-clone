import React from "react";
import  ReactDOM  from "react-dom/client";
import App, { router } from "./App";

import 'bootstrap/dist/css/bootstrap.min.css'
import './_base.scss';
import {createBrowserRouter,RouterProvider, useNavigate} from "react-router-dom";
import { Provider, useSelector } from 'react-redux'
import { store } from './redux/store'
import 'react-lazy-load-image-component/src/effects/blur.css';

import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>   
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);