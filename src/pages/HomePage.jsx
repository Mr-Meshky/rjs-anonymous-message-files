import { Container } from "@mui/material";

import LoginForm from "../components/LoginForm";

import { useTitle } from "../hooks/useTitle";

function HomePage() {
  useTitle("ورود به پیام سایت")
  return (
    <Container maxWidth="lg">
      <LoginForm />
    </Container>
  );
}

export default HomePage;
