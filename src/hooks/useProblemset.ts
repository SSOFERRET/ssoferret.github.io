import { fetchProblems } from "../api/problem.api";
import { fetchSolves } from "../api/solves.api";
import { SetterOrUpdater } from "recoil";
import { ProblemsArray } from "../models/problem.model";

export const fetchData = async (
  setProblemset: SetterOrUpdater<ProblemsArray>
) => {
  try {
    // solvedId를 먼저 가져옴
    const solvedIds = await fetchSolves();

    // 문제 목록을 가져와서 solvedId를 활용해 solved 속성을 추가
    const problemsArray = await fetchProblems();

    problemsArray.forEach((problem) => {
      problem.solved = solvedIds.includes(problem.id);
    });
    // 상태를 업데이트
    setProblemset(problemsArray);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
