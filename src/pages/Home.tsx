import React from "react";
import Login from "./Login";
import { loginState } from "../atoms/loginAtom";
import { useRecoilValue } from "recoil";
import Ranking from "../components/Ranking/Ranking";

const Home = () => {
  const isLoggedIn = useRecoilValue(loginState);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Ranking />}
    </>
  );
};

export default Home;
