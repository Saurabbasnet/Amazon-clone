import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app"; 
import firebaseConfig from "./firebase.config";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "slick-carousel/slick/slick.css";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);