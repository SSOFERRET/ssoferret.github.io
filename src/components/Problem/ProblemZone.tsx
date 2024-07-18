import { styled } from "styled-components";
import { ProblemDetail } from "../../models/problem.model";

export const ProblemZone = ({ title, description }: ProblemDetail) => {
  return (
    <ProblemZoneStyle>
      <div className="problemZone">
        <div className="title">
          <h2 className="title">{title}</h2>
        </div>

        <p className="content">{description}</p>
      </div>
    </ProblemZoneStyle>
  );
};

const ProblemZoneStyle = styled.div`
  line-height: 1.4;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      padding-left: 12px;
    }
  }

  .content {
    text-align: justify;
    padding: 10px;
  }
`;

export default ProblemZone;
