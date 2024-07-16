import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import useGetQuery from "../hooks/useGetQuery";
import AuthForm from "../components/auth/AuthForm";
import { LoginFormDataType, SignUpFormDataType } from "../types/usersType";

//무분별한 회원가입을 막기위해 이메일 인증받은 이메일만 회원가입구현해야함 (나중에)
//SNS로그인 구현 (나중에)

const AuthContainer: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  // const [signUpSuccess, setSignUpSuccess] = useState(false);
  const mode = useGetQuery("mode");
  const navigate = useNavigate();

  //useGetQuery사용
  useEffect(() => {
    setIsSignUp(mode === "signup");
  }, [mode]);

  //로그인,회원기입 폼 전환
  const toggleForm = () => {
    navigate(`?mode=${isSignUp ? "login" : "signup"}`);
  };

  //태그 선택
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const onSubmit: SubmitHandler<SignUpFormDataType & LoginFormDataType> = (data) => {
    console.log(data);
  };

  return (
    <AuthForm
      isSignUp={isSignUp}
      toggleForm={toggleForm}
      handleTagClick={handleTagClick}
      selectedTag={selectedTag}
      onSubmit={onSubmit}
    />
  );
};

export default AuthContainer;
