import styled from "styled-components";
import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAlert } from "../hooks/useAlert";
import { signup } from "../api/auth.api";

export interface SignProps {
  nickname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignProps>();

  const onSubmit = (data: SignProps) => {
    signup(data).then((res) => {
      showAlert("회원가입이 완료되었습니다.");
      navigate("/");
    });
  };

  return (
    <SignupStyle>
      <div className="container">
        <div className="title">
          <h1>회원가입</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="nickname">
            <InputBox
              placeholder="닉네임"
              inputType="text"
              {...register("nickname", { required: true })}
            />
            {errors.nickname && (
              <p className="error-text">닉네임을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="email">
            <InputBox
              placeholder="이메일"
              inputType="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="password">
            <InputBox
              placeholder="비밀번호"
              inputType="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="error-text">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset className="button">
            <Button
              size="large"
              scheme="abled"
              type="submit"
              disabled={
                !watch("nickname") || !watch("email") || !watch("password")
              }
            >
              회원가입
            </Button>
          </fieldset>
        </form>
      </div>
    </SignupStyle>
  );
};

const SignupStyle = styled.div`
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

export default Signup;
