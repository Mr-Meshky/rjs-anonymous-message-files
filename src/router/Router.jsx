import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";

import Loader from "../components/Loader";
import HomePage from "../pages/HomePage";
import PanelPage from "../pages/PanelPage";
import SendMessagePage from "../pages/SendMessagePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";

import { getProfile } from "../services/user";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route index element={data ? <Navigate to="/panel" /> : <HomePage />} />
      <Route
        path="/panel"
        element={data ? <PanelPage /> : <Navigate to="/" />}
      />
      <Route
        path="/profile"
        element={data ? <ProfilePage /> : <Navigate to="/" />}
      />
      <Route path="/send-message/:slug" element={<SendMessagePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
