import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="">
      <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: "200px", borderRadius: '50px' }} />
    </div>
  );
};

export default Editor;
