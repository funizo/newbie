import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainForm from "../components/MainForm";

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
}

const MainContainer: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { category } = useParams<{ category?: string }>();

  useEffect(() => {
    const dummyPosts: Post[] = [
      { id: 1, title: "React 기초", content: "React의 기본 개념에 대해 알아봅시다.", category: "frontend" },
      { id: 2, title: "Node.js 서버 만들기", content: "Express를 이용한 서버 구축", category: "backend" },
      {
        id: 3,
        title: "풀스택 개발 시작하기",
        content: "프론트엔드와 백엔드를 모두 다뤄봅시다.",
        category: "fullstack",
      },
      { id: 4, title: "React Native 입문", content: "모바일 앱 개발의 기초", category: "mobile" },
      { id: 5, title: "데이터 분석 기초", content: "Python을 이용한 데이터 분석", category: "data" },
      { id: 6, title: "머신러닝 알고리즘", content: "기본적인 머신러닝 알고리즘 소개", category: "ai" },
    ];

    setPosts(dummyPosts);
  }, []);

  const filteredPosts = category && category !== "all" ? posts.filter((post) => post.category === category) : posts;

  const categories = ["all", "frontend", "backend", "fullstack", "mobile", "data", "ai"];

  const categoryNames = {
    all: "전체",
    frontend: "프론트엔드",
    backend: "백엔드",
    fullstack: "풀스택",
    mobile: "모바일",
    data: "데이터",
    ai: "인공지능",
  };

  return (
    <MainForm categories={categories} categoryNames={categoryNames} filteredPosts={filteredPosts} category={category} />
  );
};

export default MainContainer;
