import { Container } from "@mui/material";

import LoginForm from "../components/LoginForm";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <LoginForm />
    </Container>
  );
}

export default HomePage;
