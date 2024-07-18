import { httpClient } from "./http";

export const fetchUser = async () => {
  try {
    const response = await httpClient.get("/user");
    return response.data;
  } catch (error) {
    throw error;
  }
};
