import api from "../configs/api";

const getProfile = () => api.get("users/whoami").then((res) => res ?? false);

const getMessages = () => api.get("messages");

const deleteMessages = () => api.delete("messages");

const deleteMessage = (id) => api.delete(`messages/${id}`);

const checkSlug = (slug, signal) =>
  api.post("users/check/slug", { slug }, { signal });

const updateProfile = (slug, displayName) =>
  api.put("users/", { slug, displayName });

export {
  getProfile,
  checkSlug,
  updateProfile,
  getMessages,
  deleteMessages,
  deleteMessage,
};
