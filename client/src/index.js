import { createContext } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const Context = createContext(null)

console.log(process.env.API_URL)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
);


