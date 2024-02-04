import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          fontWeight: 200,
        },
      }}
    />
  );
}

export default Toast;
