import React, { useState } from "react";
import UploadBtn from "./Upload";
import ImageEditor from "./ImageEditor";
import { message } from "antd";
import "./App.css";

const App = () => {
  const [imgSrc, setImgSrc] = useState(null);

  const convertFile = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImgSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (info) => {
    if (info.file.status !== "uploading") {
      message.success(`${info.file.name} file uploaded successfully`);
      convertFile(info.file);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className='container'>
      <UploadBtn onChange={handleChange} />
      <ImageEditor imgSrc={imgSrc} onClose={setImgSrc} />
    </div>
  );
};

export default App;
