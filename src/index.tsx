import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";

ReactDOM.render(
      <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
,    document.getElementById("root")
  );