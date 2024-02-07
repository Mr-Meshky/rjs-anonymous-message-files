import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../components/Loader";

import { getNameBySlug } from "../services/message";
import SendMessage from "../components/SendMessage";
import SendMessageSucces from "../components/SendMessageSucces";

function SendMessagePage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNameBySlug(slug)
      .then((res) => {
        setName(res.data.displayName);
        setIsLoading(false);
      })
      .catch((err) => navigate("/404"));
  });

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Grid container height="calc(100vh - 220px)" mt={4} px={3}>
        <Grid
          item
          xs={11}
          margin="auto"
          p={3}
          sx={{
            boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
            background: "#fff",
            borderRadius: "7px",
          }}
        >
          {step === 1 ? (
            <SendMessage slug={slug} setStep={setStep} name={name} />
          ) : (
            <SendMessageSucces name={name} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default SendMessagePage;
