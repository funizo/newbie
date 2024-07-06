import React from "react";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

const HeaderForm: React.FC = () => {
  return (
    <header className="w-full h-16 bg-blue-400">
      <nav className="flex items-center justify-center h-full">
        <div className="flex justify-between items-center w-full px-4">
          <Link to="/" className="text-white font-bold text-2xl">
            코린이
          </Link>
          <Link to={routes.login} className="text-white font-bold text-2xl">
            로그인/회원가입
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderForm;
