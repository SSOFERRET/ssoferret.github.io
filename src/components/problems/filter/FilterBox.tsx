import styled from "styled-components";
import { GoTriangleRight } from "react-icons/go";
import LevelFilterButton from "./LevelFilterButton";
import NotSolvedOnlyFilterButton from "./NotSolvedOnlyFilterButton";

interface FilterBoxProps {
    showFilter: number[];
    problemLevel: number[];
    setShowFilter: (value: number[]) => void;
    notSolvedOnly: boolean;
    setNotSolvedOnly: (value: boolean) => void;
    toggleFilter: boolean;
    setToggleFilter: (value: boolean) => void;
}

const FilterBox = ({ setShowFilter, showFilter, setNotSolvedOnly, notSolvedOnly, problemLevel, toggleFilter, setToggleFilter }: FilterBoxProps) => {    
    const handleAllFilter = () => {
        if (showFilter.length === problemLevel.length) {
            setShowFilter([]);
        } else {
            setNotSolvedOnly(false);
            setShowFilter(problemLevel);
        }
    }

    const handleAddFilter = (level: number) => {
        setShowFilter([...showFilter, level]);
    }

    const handleDeleteFilter = (level: number) => {
        setShowFilter(showFilter.filter((num) => num !== level));
    }

    const handleNotSolvedOnlyFilter = () => {
        setNotSolvedOnly(!notSolvedOnly);
    }

    return (
        <FilterBoxStyle $toggleFilter={toggleFilter} $allFilter={showFilter.length===problemLevel.length}>
            <div className="filter-toggle">
                <button  onClick={() => setToggleFilter(!toggleFilter)}>
                    <GoTriangleRight /> 필터
                </button>
            </div>
            {   
                toggleFilter && (
                    <div className="filter-div">
                        <div className="filter-all">
                            <button onClick={handleAllFilter}>전체</button>
                        </div>
                        <div className="filter-grid">
                            <div className="filter-level">
                                {
                                    problemLevel.map((level) => (
                                        <>
                                            <LevelFilterButton onClick={() => showFilter.includes(level) ? 
                                                handleDeleteFilter(level)
                                                : handleAddFilter(level)
                                            }
                                            buttonId={level}
                                            showFilter={showFilter}
                                            ></LevelFilterButton>
                                        </>
                                    ))                             
                                }
                            </div>
                            <div className="filter-not-solved">
                                <NotSolvedOnlyFilterButton notSolvedOnly={notSolvedOnly} onClick={handleNotSolvedOnlyFilter} />              
                            </div>
                        </div>
                    </div>
                )
            }
        </FilterBoxStyle>
    )
}

interface FilterBoxStyleProps {
    $toggleFilter: boolean;
    $allFilter: boolean;
}

const FilterBoxStyle = styled.div<FilterBoxStyleProps>`
     .filter-div {
        display: flex;
        flex-direction: row;
        margin-left: 37px;
    }

    .filter-toggle {
        button {
            font-size: 1rem;
            color: ${({ theme }) => theme.color.text2};
            font-weight: 600;
            background: none;
            border: none;
            margin-bottom: 12px;
            cursor: pointer;
    
            svg {
                width: 30px;
                transform: ${({ $toggleFilter }) => $toggleFilter ? "rotate(90deg)" : "rotate(0deg)"};
            }
        }
    }

    .filter-grid {
        width: 90%;
        
        button {
            margin-bottom: 8px;
        }

        .filter-level {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
    }

    .filter-all {
        width: 10%;
        button {
            font-size: 1rem;
            color: ${({ theme, $allFilter }) => $allFilter ? theme.color.text2 : theme.color.text1};
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
        }
    }
`;

export default FilterBox;
