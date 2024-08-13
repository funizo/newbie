import React from "react";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import whale from "../../assets/whale.png";

const HeaderForm: React.FC = () => {
  return (
    <header className="w-full h-16 bg-blue-500">
      <nav className="flex items-center justify-center h-full">
        <div className="flex justify-between items-center w-full px-4">
          <Link to="/" className="text-white font-bold text-2xl">
            <img src={whale} alt="logo" className="mx-auto h-16 w-auto" />
          </Link>
          <Link to={routes.login} className="text-white font-bold text-xl">
            로그인/회원가입
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderForm;
