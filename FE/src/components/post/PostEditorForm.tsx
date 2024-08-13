import React, { useState } from "react";
import TinyMCEEditor from "./TinyMCEEditor";

const PostEditorForm: React.FC = () => {
    const [content, setContent] = useState("");

    return (
        <div className="">
            <TinyMCEEditor
                initialValue=""
                onChange={(content, editor) => setContent(content)}
            />
            <div>
                <h2>Editor Content:</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default PostEditorForm;
