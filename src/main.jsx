import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";
import Layout from "./layouts/Layout";

import theme from "./configs/theme.js";
import defaultOptions from "./configs/reactQuery.js";

import "./styles/index.css";
import "./styles/fonts.css";

const queryClient = new QueryClient({ defaultOptions });

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
