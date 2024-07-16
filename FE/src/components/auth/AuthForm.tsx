import React, { useEffect } from "react";
import whale from "../../assets/whale.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormDataType, SignUpFormDataType } from "../../types/usersType";

interface AuthFormProps {
  isSignUp: boolean;
  toggleForm: () => void;
  handleTagClick: (tag: string) => void;
  selectedTag: string;
  onSubmit: SubmitHandler<SignUpFormDataType & LoginFormDataType>;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignUp, toggleForm, handleTagClick, selectedTag, onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<SignUpFormDataType & LoginFormDataType>({ mode: "all" });

  //tag가 변경될때마다 state변경
  useEffect(() => {
    setValue("tag", selectedTag);
    console.log("tag", selectedTag);
    if (selectedTag) {
      clearErrors("tag");
    }
  }, [selectedTag, setValue, clearErrors]);

  //비밀번호확인용 추적
  const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-screen-md mx-auto ">
        <div className="items-center justify-center h-full my-8 mx-4">
          <a href="/">
            <img src={whale} alt="logo" className="mx-auto h-40 w-auto" />
          </a>
          <h2 className="text-center text-2xl font-bold sm:text-3xl">코린이에 오신것을 환영합니다.</h2>
          <p className="mt-2 text-center text-sm text-gray-600">코린이는 신입 개발자들의 소통을 위한 플랫폼입니다.</p>

          <div className="relative mt-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-500/30 "></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-blue-500 font-bold"> {isSignUp ? "회원가입" : "로그인"}</span>
            </div>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                이메일
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  {...register("email", {
                    required: "이메일을 입력해주세요",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message: "유효한 이메일 주소를 입력해주세요",
                    },
                  })}
                  className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base"
                  autoComplete="email"
                />
                {errors.email && <p className="text-sm mt-1 text-red-600">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">비밀번호</label>
              <div className="mt-1">
                <input
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요",
                    minLength: {
                      value: 8,
                      message: "비밀번호는 최소 8자 이상이어야 합니다",
                    },
                  })}
                  className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base "
                />
                {errors.password && <p className="text-sm mt-1 text-red-600">{errors.password.message}</p>}
              </div>
            </div>

            {isSignUp ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="confirmPassword"
                      {...register("confirmPassword", {
                        required: "비밀번호가 일치하지 않습니다",
                        validate: (value: string) => value === password || "비밀번호가 일치하지 않습니다",
                      })}
                      className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base "
                    />
                    {errors.confirmPassword && (
                      <p className="text-sm mt-1 text-red-600">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">관심태그</label>
                  <p className="text-sm text-gray-500">여러분이 준비중인 직종을 선택해주세요! (한가지만)</p>
                  <div className="mt-4">
                    <ul className="flex w-full flex-wrap justify-center gap-x-2 gap-y-2">
                      {["프론트엔드", "백엔드", "풀스텍", "모바일", "데이터", "AI"].map((tag, i) => (
                        <li className="inline-flex" key={i}>
                          <button
                            type="button"
                            onClick={() => handleTagClick(tag)}
                            className={`px-4 py-2 text-sm font-medium rounded-full ${
                              selectedTag === tag ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {tag}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <input type="hidden" value={selectedTag || ""} {...register("tag", { required: true })} />
                    {errors.tag && <span className="text-red-500 mt-1 text-sm">관심태그를 선택해주세요.</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    닉네임
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      {...register("nickname", {
                        required: "닉네임을 입력해 주세요",
                        maxLength: {
                          value: 12,
                          message: "닉네임은 최대 12글자 이내여야 합니다",
                        },
                        pattern: {
                          value: /^[가-힣a-zA-Z]+$/,
                          message: "닉네임은 한글 또는 영어만 입력 가능합니다",
                        },
                      })}
                      className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base"
                    />
                    {errors.nickname && <p className="mt-1 text-sm text-red-600">{errors.nickname.message}</p>}
                  </div>
                </div>
              </div>
            ) : null}
            <div>
              <button
                type="submit"
                className="relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none"
              >
                {isSignUp ? "회원가입" : "로그인"}
              </button>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm">
              <p>{isSignUp ? "이미 계정이 있으신가요?" : "아직 회원이 아니신가요?"}</p>
              <p
                className="flex items-center text-blue-500 underline hover:text-blue-400 cursor-pointer"
                onClick={toggleForm}
              >
                {isSignUp ? "로그인" : "회원가입"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
