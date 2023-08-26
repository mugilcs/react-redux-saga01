import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configStore from "./store/configerStore";

import App from "./App";
import "semantic-ui-css/semantic.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configStore();

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
