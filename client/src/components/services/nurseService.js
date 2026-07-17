import api from "./api";

export const getNurses = async () => {
  const response = await api.get("/nurses");
  return response.data;
};