import api from "../configs/api";

const getProfile = () => api.get("users/whoami").then((res) => res ?? false);

// const getMessages = () => api.get("");

export { getProfile };
