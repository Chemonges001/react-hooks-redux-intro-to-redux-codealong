import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counterReducer from "./features/counter/counterSlice.js";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const store = createStore(counterReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
    )

ReactDOM.render(
<Provider store ={store}>
    < App />
    </Provider>, 
document.getElementById("root"));
