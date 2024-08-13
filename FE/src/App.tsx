import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import { AuthPage } from "./pages";
import { PostEditorPage } from "./pages";
import routes from "./constants/routes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path=":category" element={<MainPage />} />
      </Route>
      <Route path={routes.auth} element={<AuthPage />} />
      {/* 로그인,회원가입 페이지 */}

      <Route path={routes.postEditor} element={<PostEditorPage />} />
      {/*글쓰기 페이지 */}
    </Routes>
  );
};

export default App;
