import { createContext } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const Context = createContext(null)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
);


