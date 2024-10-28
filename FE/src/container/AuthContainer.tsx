import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import useGetQuery from "../hooks/useGetQuery";
import AuthForm from "../components/auth/AuthForm";
import { LoginFormDataType, SignUpFormDataType } from "../types/usersType";
import { useSignUp } from "../hooks/useSignUp";

//무분별한 회원가입을 막기위해 이메일 인증받은 이메일만 회원가입구현해야함 (나중에)
//SNS로그인 구현 (나중에)

const AuthContainer: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);
    // const [signUpSuccess, setSignUpSuccess] = useState(false);
    const mode = useGetQuery("mode");
    const navigate = useNavigate();
    const { signUp, error, loading } = useSignUp();
    const [emailCheck, setEmailCheck] = useState(false);
    const [nicknameCheck, setNicknameCheck] = useState(false);

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

    //데이터 전송
    const onSubmit: SubmitHandler<SignUpFormDataType> = async (data) => {
        try {
            await signUp({
                email: data.email,
                password: data.password,
                tag: data.tag,
                nickname: data.nickname,
            });
            console.log("User signed up successfully");
            console.log(loading);
            navigate("?mode=login");
            // 회원가입 후 추가적인 로직 (ex. 라우팅 등)
        } catch (err) {
            console.error("Signup error:", err);
            // 에러 처리 (중복, 입력 오류 등)
        }
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
