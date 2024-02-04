import api from "../configs/api";

const sendOtp = async (email) => {
  try {
    const response = await api.post("auth/login", { email });
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (email, code) => {
  try {
    const response = await api.post("auth/login", { email, code });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtp, checkOtp };
