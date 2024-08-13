import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TinyMCEEditorProps {
    initialValue: string;
    onChange: (content: string, editor: any) => void;
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({
    initialValue,
    onChange,
}) => {
    const editorRef = useRef<any>(null);

    return (
        <Editor
            apiKey={process.env.REACT_APP_API_KEY}
            onInit={(evt, editor) => {
                editorRef.current = editor;
            }}
            initialValue={initialValue}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "searchreplace",
                    "fullscreen",
                    "media",
                    "table",
                    "code",
                    "help",
                    "emoticons",
                    "codesample",
                    "quickbars",
                ],
                toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "lists table link charmap searchreplace | " +
                    "image media codesample emoticons fullscreen preview | " +
                    "removeformat | help ",
                content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
        />
    );
};

export default TinyMCEEditor;
