import { Grid } from "@mui/material";
import { useState } from "react";

import SendEmail from "./SendEmail";
import CheckCode from "./CheckCode";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);

  return (
    <Grid container height="calc(100vh - 220px)" mt={4}>
      {step === 1 ? (
        <SendEmail email={email} setEmail={setEmail} setStep={setStep} />
      ) : (
        <CheckCode
          email={email}
          code={code}
          setCode={setCode}
          setStep={setStep}
        />
      )}
    </Grid>
  );
}

export default LoginForm;
