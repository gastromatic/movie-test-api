import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:3000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const defaultTheme = createTheme();

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
