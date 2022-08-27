import ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </Provider>
);
