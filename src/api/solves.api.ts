import { ProblemIds } from "../models/problem.model";
import { httpClient } from "./http";

export const fetchSolves = async () => {
  const response = await httpClient.get("/solves");
  const data: ProblemIds = response.data;
  return data;
};

export const addScore = async () => {
  const response = await httpClient.put("/solves");
  return response.data;
};

export const fetchSolved = async (problemId: Number) => {
  const response = await httpClient.post(`/solves?problem_id=${problemId}`);
  return response;
};
