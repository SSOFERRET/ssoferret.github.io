import { SignProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignProps) => {
  const response = await httpClient.post("/join", userData);
  return response.data;
};

interface LoginResponse {
  token: string;
}

export const login = async (userData: SignProps) => {
  const response = await httpClient.post<LoginResponse>("/login", userData);
  return response;
};
