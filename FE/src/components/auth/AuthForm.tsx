import React from "react";
import whale from "../../assets/whale.png";

interface AuthFormProps {
  isSignUp: boolean;
  toggleForm: () => void;
  handleTagClick: (tag: string) => void;
  selectedTag: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignUp, toggleForm, handleTagClick, selectedTag }) => {
  return (
    <div className="flex items-center justify-center min-h-screen my-8 mx-4">
      <div className="max-w-screen-md mx-auto">
        <div className="items-center justify-center h-full">
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
              <span className="bg-white px-2 text-blue-500 "> {isSignUp ? "회원가입" : "로그인"}</span>
            </div>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">아이디</label>
              <div className="mt-1">
                <input
                  type="text"
                  className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base "
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">비밀번호</label>
              <div className="mt-1">
                <input
                  type="password"
                  className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base "
                />
              </div>
            </div>

            {isSignUp ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">비밀번호 확인</label>
                  <div className="mt-1">
                    <input
                      type="password"
                      className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base "
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    이메일
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base"
                    />
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
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    닉네임
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="block w-full appearance-none rounded-md border border-gray-500/30 px-3 py-2 text-sm placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 sm:text-base"
                    />
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
