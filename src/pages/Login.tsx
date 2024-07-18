import styled from "styled-components";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcFullTrash } from "react-icons/fc";
import { useSetRecoilState } from "recoil";
import { loginState } from "../atoms/loginAtom";
import { useAlert } from "../hooks/useAlert";
import { login } from "../api/auth.api";
import { setToken } from "../store/authStore";
import { fetchUser } from "../api/user.api";
import { nicknameAtom } from "../atoms/nicknameAtom";
import { totalScoreAtom } from "../atoms/totalScoreAtom";
import axios from "axios";
import { problemsetAtom } from "../atoms/problemAtom";
import { fetchData } from "../hooks/useProblemset";

export interface SignProps {
  nickname: string;
  email: string;
  password: string;
}

const Login = () => {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const { register, handleSubmit, watch } = useForm<SignProps>();

  const setNickname = useSetRecoilState(nicknameAtom);
  const setTotalScore = useSetRecoilState(totalScoreAtom);
  const setProblemset = useSetRecoilState(problemsetAtom);

  const showAlert = useAlert();

  const onSubmit = (data: SignProps) => {
    login(data).then(
      (res) => {
        const token = res.headers.authorization;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setToken(token);
        setIsLoggedIn(true);
        showAlert("로그인이 완료되었습니다.");
        fetchUser().then((user) => {
          setNickname(user.nickname);
          setTotalScore(user.total_score);
        });
        fetchData(setProblemset);
      },
      (error) => {
        showAlert("로그인이 실패했습니다.");
      }
    );
  };

  return (
    <LoginStyle>
      <div className="container">
        <div className="title">
          <FcFullTrash size="200" />
          <h1>Clean Up</h1>
        </div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="email">
            <InputBox
              placeholder="이메일"
              inputType="email"
              {...register("email", { required: true })}
            />
          </fieldset>
          <fieldset className="password">
            <InputBox
              placeholder="비밀번호"
              inputType="password"
              {...register("password", { required: true })}
            />
          </fieldset>
          <fieldset className="button">
            <Button
              size="large"
              scheme="abled"
              type="submit"
              disabled={!watch("email") || !watch("password")}
            >
              {"Login"}
            </Button>
          </fieldset>
        </form>
        <Link to={"/signup"}>{"회원가입"}</Link>
      </div>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  position: absolute;
  top: -50px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        height: 140px;
      }

      h1 {
        font-size: 6rem;
        color: ${({ theme }) => theme.headerText.default.color};
        font-weight: ${({ theme }) => theme.headerText.default.fontWeight};
        text-shadow: -3px 0px #bbb, 0px 3px #bbb, 3px 0px #bbb, 0px -3px #bbb;
        margin-bottom: 20px;
      }
    }

    fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: none;

      input {
        width: 300px;
        height: 45px;
        text-align: center;
        border: 2px solid #ddd;
      }

      button {
        margin-top: 20px;
        width: 150px;
      }

      svg {
        fill: ${({ theme }) => theme.color.secondary};
      }
    }

    a {
      color: ${({ theme }) => theme.color.text2};
      text-decoration: none;
      font-size: 1.2rem;
      margin-top: 12px;
    }
  }
`;

export default Login;
