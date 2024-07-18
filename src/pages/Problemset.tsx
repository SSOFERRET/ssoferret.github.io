import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import FilterBox from "../components/problems/filter/FilterBox";
import ProblemsTable from "../components/problems/table/ProblemsTable";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { filterHeightState } from "../atoms/heightAtom";
import { problemsetAtom } from "../atoms/problemAtom";

const Problemset = () => {
  const problemset = useRecoilValue(problemsetAtom);
  // 레벨별 필터 기능 위해 레벨 배열 추출
  let problemLevel = problemset.map((problem) => problem.level);
  problemLevel = problemLevel
    .filter((level, idx) => problemLevel.indexOf(level) === idx)
    .sort((a, b) => a - b);

  // 필터링 위한 배열(전체 버튼, 각 레벨 버튼)
  const [showFilter, setShowFilter] = useState<number[]>(problemLevel);

  const [notSolvedOnly, setNotSolvedOnly] = useState<boolean>(false);

  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

  const filterRef = useRef<HTMLDivElement>(null);
  const setFilterHeight = useSetRecoilState(filterHeightState);

  useEffect(() => {
    setFilterHeight(filterRef.current?.offsetHeight || 700);
  }, [setFilterHeight, toggleFilter]);

  return (
    <ProblemsetStyle>
      <div className="filter" ref={filterRef}>
        <FilterBox
          setShowFilter={setShowFilter}
          setNotSolvedOnly={setNotSolvedOnly}
          showFilter={showFilter}
          notSolvedOnly={notSolvedOnly}
          problemLevel={problemLevel}
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
        />
      </div>
      <div className="table">
        <ProblemsTable
          showFilter={showFilter}
          notSolvedOnly={notSolvedOnly}
          problemset={problemset}
          toggleFilter={toggleFilter}
        />
      </div>
    </ProblemsetStyle>
  );
};

const ProblemsetStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .filter {
    width: 80%;
    margin: 0 10%;
    padding: 30px 0 0 0;
  }

  .table {
    width: 80%;
    margin-left: 10%;
  }
`;

export default Problemset;
