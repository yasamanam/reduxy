import {
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { create } from "jss";
import { createMuiTheme } from "@material-ui/core";
import rtl from "jss-rtl";
import store from "./redux/store";

const theme = createMuiTheme({
  direction: "rtl",
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
