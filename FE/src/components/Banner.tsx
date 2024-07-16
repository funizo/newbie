import React, { useState, useEffect } from "react";

const Banner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleBanner = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`hidden md:block bg-blue-400 text-white rounded-lg shadow-md mb-6 transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[500px]" : "max-h-16"
      }`}
    >
      <div className="container mx-auto relative p-3">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold cursor-pointer" onClick={toggleBanner}>
            코린이의 자유게시판에 오신 것을 환영합니다!
          </h1>
          {isOpen && (
            <button className="text-white hover:text-gray-200 ml-4" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          )}
        </div>
        <div
          className={`mt-4 transition-all duration-500 ${isOpen ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"}`}
        >
          <p className="text-xl mb-4">신입 개발자 분들을 위한 자유로운 게시판입니다. 부담없이 소통하세요!</p>
          <p className="text-lg">다음과 같은 다양한 주제로 정보를 교환해보세요:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-lg">
            <li>이력서 및 포트폴리오 피드백</li>
            <li>개발자로서의 고민과 하소연</li>
            <li>면접 후기 공유</li>
            <li>취업 정보 교류</li>
            <li>기술 관련 질문과 답변</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
