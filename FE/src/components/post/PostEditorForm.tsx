import React, { useState } from "react";
import TinyMCEEditor from "./TinyMCEEditor";

const PostEditorForm: React.FC = () => {
    const [content, setContent] = useState("");

    console.log(content);

    return (
        <div className="max-w-screen-md mx-auto">
            <div>
                <p>주제</p>
            </div>
            <TinyMCEEditor
                initialValue=""
                onChange={(content, editor) => setContent(content)}
            />
        </div>
    );
};

export default PostEditorForm;
