import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Toast from "./components/Toast";

import Router from "./router/Router";

function App() {
  return (
    <>
      <Router />
      <Toast />
      {/* <ReactQueryDevtools /> */}
    </>
  );
}

export default App;
