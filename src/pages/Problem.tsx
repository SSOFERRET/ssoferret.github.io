import { styled } from "styled-components";
import ProblemZone from "../components/Problem/ProblemZone";
import CodeBoxZone from "../components/Problem/CodeBoxZone";
import TrashMoveZone from "../components/Problem/TrashMoveZone";
import Button from "../components/common/Button";
import { fetchProblem } from "../api/problem.api";
import { useNavigate, useParams } from "react-router-dom";
import { ProblemDetail } from "../models/problem.model";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { answerAtom, codeAtom, problemsetAtom } from "../atoms/problemAtom";
import { solveAtom } from "../atoms/problemAtom";
import { addScore, fetchSolved } from "../api/solves.api";
import { fetchData } from "../hooks/useProblemset";
import { useAlert } from "../hooks/useAlert";
import { totalScoreAtom } from "../atoms/totalScoreAtom";

export const Problem = () => {
  const problemId = Number(useParams().id);
  const navigate = useNavigate();
  let [problem, setProblem] = useState<ProblemDetail>();
  const setAnswer = useSetRecoilState(answerAtom);
  const [solve, setSolve] = useRecoilState(solveAtom);
  const setProblemset = useSetRecoilState(problemsetAtom);
  const showAlert = useAlert();
  const [totalScore, setTotalScore] = useRecoilState(totalScoreAtom);
  const [score, setScore] = useState<number>(0);
  const setCode = useSetRecoilState(codeAtom);

  useEffect(() => {
    fetchProblem(problemId).then((res) => {
      setProblem(res);
      setAnswer(res.answer);
      setScore(res.score);
    });
  }, [problemId, setAnswer]);

  const solveClickHandler = () => {
    if (solve) {
      fetchSolved(problemId).then(() => {
        fetchData(setProblemset);
      });
      addScore();
      setTotalScore(totalScore + score);
      setCode("");
      showAlert("문제 해결");
      navigate("/problemset");
      setSolve(false);
    }
  };

  if (!problem) return null;

  return (
    <ProblemStyle>
      <div className="problemZone">
        <ProblemZone title={problem.title} description={problem.description} />
        <CodeBoxZone />
        <div className="buttonPosition">
          <Button
            size="medium"
            scheme={solve ? "clicked" : "abled"}
            borderRadius="round"
            onClick={solveClickHandler}
          >
            성공
          </Button>
        </div>
      </div>
      <div className="moveZone">
        <TrashMoveZone />
      </div>
    </ProblemStyle>
  );
};

const ProblemStyle = styled.div`
  display: flex;
  height: 100vh;

  .problemZone,
  .moveZone {
    flex: 1;
  }

  .problemZone {
    background: #ffbebc;
    padding: 20px;
  }

  .moveZone {
    background: #d7e1d9;
  }

  .buttonPosition {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    padding: 10px;
  }
`;

export default Problem;
