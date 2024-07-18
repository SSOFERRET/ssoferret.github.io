import { ProblemDetailAnswer, ProblemsArray } from "../models/problem.model";
import { httpClient } from "./http";

export const fetchProblems = async () => {
  const response = await httpClient.get("/problemset");
  const data: ProblemsArray = response.data;
  return data;
};

export const fetchProblem = async (problemId: number) => {
  const response = await httpClient.get(`/problemset/${problemId}`);
  const data: ProblemDetailAnswer = response.data;
  return data;
};