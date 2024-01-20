import React from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { fontSize } from "./toolbar";
import ReactQuill, { Quill } from "react-quill";

const StyledQuillWrapper = styled.div`
  .ql-container.ql-snow {
    font-family: "Arial", sans-serif;
    width: 100%;
    border: none;
    min-height: 420px;
    border-bottom: 1px solid #ccc;
  }

  .ql-editor.ql-snow {
    padding: 10px;
    color: #0f473f;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    border: none;
  }

  .ql-toolbar.ql-snow {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
  }
`;

interface WriteProps {
  value: string;
  onChange: (content: string) => void;
}

const Write: React.FC<WriteProps> = ({ value, onChange }) => {
  const Size = Quill.import("attributors/style/size");
  Size.whitelist = fontSize;
  Quill.register(Size, true);

  const Font = Quill.import("attributors/class/font");
  Font.whitelist = ["arial", "buri", "gangwon"];
  Quill.register(Font, true);
  return (
    <StyledQuillWrapper>
      <QuillToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={{
          toolbar: {
            container: "#toolbar",
            handlers: {},
          },
        }}
      />
    </StyledQuillWrapper>
  );
};

export default Write;
