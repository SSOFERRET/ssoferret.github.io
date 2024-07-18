import styled from "styled-components";

export const HEIGHT = 40;

function ProblemHead () {
    return (
        <ProblemHeadStyle>
            <div className="id">No.</div>
            <div className="title">
                Title
            </div>
            <div className="level">Level</div>
            <div className="score">Score</div>
            <div className="solved">Solved</div>
        </ProblemHeadStyle>
    )
}

const ProblemHeadStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: ${HEIGHT}px;

    text-align: center;
    align-items: center;

    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.text1};
    background-color: ${({ theme }) => theme.color.thirdary};
            
    border-radius: ${({ theme }) => theme.borderRadius.default};

    .id {
        width: 8%;
    }

    .title {
        width: 53%;
    }

    .level {
        width: 13%;
    }

    .score {
        width: 13%;
    }

    .solved {
        width: 13%;

    }
`;

export default ProblemHead;
