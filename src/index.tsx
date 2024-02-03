import React from "react";
import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/Providers/ThemeProvider";
import App from "app/App";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
