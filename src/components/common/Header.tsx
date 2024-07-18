import { useEffect, useRef, useState } from "react";
import { FcFullTrash } from "react-icons/fc";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { headerHeightState } from "../../atoms/heightAtom";
import Button from "./Button";
import { loginState } from "../../atoms/loginAtom";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../store/authStore";
import { nicknameAtom } from "../../atoms/nicknameAtom";
import { totalScoreAtom } from "../../atoms/totalScoreAtom";

const Header = () => {
  const headRef = useRef<HTMLHeadElement>(null);
  const setHeaderHeight = useSetRecoilState(headerHeightState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [isHovered, setIsHovered] = useState(false);
  const nickname = useRecoilValue(nicknameAtom);
  const totalScore = useRecoilValue(totalScoreAtom);

  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    removeToken();
    navigate("/");
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setHeaderHeight(headRef.current?.offsetHeight || 0);
  }, [setHeaderHeight]);

  useEffect(() => {
    setIsHovered(false);
  }, [isLoggedIn]);

  return (
    <HeaderStyle ref={headRef}>
      <div className="left-group">
        <FcFullTrash size="70" />
        <h1>Clean up</h1>
      </div>
      {isLoggedIn && (
        <>
          <div className="right-group">
            <div className="userNav">
              <p>{nickname}</p>
              <p>{totalScore}</p>
            </div>
            <Button
              size="medium"
              scheme={isHovered ? "clicked" : "abled"}
              onClick={logoutHandler}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <MdLogout />
            </Button>
          </div>
        </>
      )}
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.thirdary};

  a {
    text-decoration: none;
  }
  .left-group {
    display: flex;
    justify-content: end;
    padding-left: 10px;
    align-items: center;
  }
  h1 {
    color: ${({ theme }) => theme.headerText.default.color};
    font-size: ${({ theme }) => theme.headerText.default.fontSize};
    font-weight: ${({ theme }) => theme.headerText.default.fontWeight};
    text-shadow: ${({ theme }) => theme.headerText.default.textShadow};
    font-family: "NeoDunggeunmo", sans-serif;
    margin-left: 20px;
  }

  .right-group,
  .right-group-at-logout {
    display: flex;
    align-items: center;
    gap: 30px;
    padding-right: 25px;

    font-size: 20px;

    .userNav {
      gap: 30px;
      display: flex;
      flex-direction: row;
    }
  }
`;

export default Header;
