import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { footerHeightState } from "../../atoms/heightAtom";

const Footer = () => {
  const footRef = useRef<HTMLDivElement>(null);
  const setFooterHeight = useSetRecoilState(footerHeightState);

  useEffect(() => {
    setFooterHeight(footRef.current?.offsetHeight || 0);
  }, [setFooterHeight]);

  return (
    <FooterStyle ref={footRef}>
      <nav>
        <a href="https://github.com/DevCourse-CleanUp">
          CleanUp Project GitHub
        </a>
      </nav>
      <p>
        <span>
          타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js) 2기
        </span>
        <br />
        <span>COPYRIGHT (c), 2024, Team 5, All rights reserved.</span>
        <br />
        <span>Team 5 : 고윤성 김준서 박민혜 박소현 차재현</span>
        <br />
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  bottom: 0px;
  position: fixed;
  height: 16%;

  width: 100%;
  margin: 0 auto;
  padding: 20px 0px 10px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.thirdary};

  a {
    display: inline-block;
    margin: 0 20px 10px 20px;
    color: ${({ theme }) => theme.color.text1};
    font-size: ${({ theme }) => theme.heading.medium.fontSize};
    font-family: "NeoDunggeunmo", sans-serif;
    text-decoration: none;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    span {
      display: inline-block;
      margin-left: 20px;
      color: ${({ theme }) => theme.color.text2};
      font-size: ${({ theme }) => theme.heading.small.fontSize};
      font-family: "NeoDunggeunmo", sans-serif;
    }
  }
`;

export default Footer;
