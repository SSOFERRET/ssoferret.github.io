import styled from "styled-components";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

interface NotSolvedOnlyFilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  notSolvedOnly: boolean;
}

const NotSolvedOnlyFilterButton = ({
  notSolvedOnly,
  onClick,
}: NotSolvedOnlyFilterButtonProps) => {
  return (
    <NotSolvedOnlyFilterButtonStyle $notSolvedOnly={notSolvedOnly}>
      <button onClick={onClick}>
        {notSolvedOnly ? (
          <MdOutlineCheckBox />
        ) : (
          <MdOutlineCheckBoxOutlineBlank />
        )}
        안 푼 문제만
      </button>
    </NotSolvedOnlyFilterButtonStyle>
  );
};

interface INotSolvedOnlyFilterButtonStyleProps {
  $notSolvedOnly: boolean;
}

export const NotSolvedOnlyFilterButtonStyle = styled.div<INotSolvedOnlyFilterButtonStyleProps>`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background: none;
    border: 0;
    gap: 8px;

    color: ${({ theme, $notSolvedOnly }) =>
      $notSolvedOnly ? theme.color.text2 : theme.color.text1};
    font-weight: ${({ $notSolvedOnly }) => ($notSolvedOnly ? 700 : 100)};

    svg {
      width: 24px;
      height: 24px;
    }
    cursor: pointer;
  }
`;

export default NotSolvedOnlyFilterButton;
