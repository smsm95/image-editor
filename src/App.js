import React, { useState } from "react";
import UploadBtn from "./Upload";
import ImageEditor from "./ImageEditor";
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

  return (
    <div className='container'>
      <UploadBtn onChange={convertFile} />
      <ImageEditor imgSrc={imgSrc} onClose={setImgSrc} />
    </div>
  );
};

export default App;
