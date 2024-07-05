import React from "react";
import { Outlet } from "react-router-dom";
import HeaderContainer from "../container/HeaderContainer";
import FooterContainer from "../container/FooterContainer";
const MainLayout: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      <HeaderContainer />
      <div>
        <Outlet />
      </div>
      <FooterContainer />
    </div>
  );
};

export default MainLayout;
