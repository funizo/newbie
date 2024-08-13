import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

interface Post {
    id: number;
    title: string;
    content: string;
    category: string;
}

interface MainFormProps {
    categories: string[];
    categoryNames: { [key: string]: string };
    filteredPosts: Post[];
    category?: string;
    moveToEditor: () => void;
}

const MainForm: React.FC<MainFormProps> = ({
    categories,
    categoryNames,
    filteredPosts,
    category,
    moveToEditor,
}) => {
    return (
        <div className="bg-slate-100 p-6">
            <Banner />
            <nav className="mb-6">
                <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    {categories.map((cat) => (
                        <li key={cat} className="mb-2">
                            <Link
                                to={cat === "all" ? "/" : `/${cat}`}
                                className={`px-2 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base ${
                                    category === cat ||
                                    (cat === "all" && !category)
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {categoryNames[cat]}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-between mt-4">
                    <button className="hidden md:block p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                        🔃
                    </button>
                    <div className="flex-grow flex justify-center">
                        <input
                            type="text"
                            className="w-full md:max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="검색어를 입력하세요"
                        />
                    </div>
                    <button
                        className="ml-4 md:ml-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        onClick={() => {
                            moveToEditor();
                        }}
                    >
                        ✏️
                    </button>
                </div>
            </nav>
            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white p-4 rounded shadow transition duration-200 ease-in-out hover:shadow-lg hover:bg-gray-50 cursor-pointer"
                    >
                        <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">
                            {post.title}
                        </h2>
                        <p className="text-gray-600">{post.content}</p>
                        <div className="mt-2 text-sm text-gray-500">
                            <span>
                                카테고리: {categoryNames[post.category]}
                            </span>
                            {/* 여기에 작성자, 날짜 등 추가 정보를 넣을 수 있습니다 */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainForm;
