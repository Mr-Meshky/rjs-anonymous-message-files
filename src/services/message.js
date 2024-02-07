import api from "../configs/api";

const getNameBySlug = (slug) => api.get(`messages/send-message/${slug}`);

const sendMessage = (text, slug) =>
  api.post("messages/send-message/", { slug, text });

export { getNameBySlug, sendMessage };
