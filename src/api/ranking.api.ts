import { rankingArray } from "../models/ranking.model";
import { httpClient } from "./http";

export const fetchRanking = async () => {
  const response = await httpClient.get("/");
  const data: rankingArray = response.data;
  return data;
};
