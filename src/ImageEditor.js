import FilerobotImageEditor from "filerobot-image-editor";
import React from "react";

const ImageEditor = ({ imgSrc, onClose }) => {
  const configuration = {
    colorScheme: "light",
    isLowQualityPreview: true,
    tools: ["adjust", "effects", "filters", "rotate", "crop", "shapes", "text"],
    translations: {
      en: {
        "header.image_editor_title": "Online Image Editor",
        "toolbar.download": "Download",
      },
    },
  };

  return (
    <FilerobotImageEditor
      config={configuration}
      show={imgSrc ? true : false}
      src={imgSrc}
      onClose={() => onClose(null)}
    />
  );
};

export default ImageEditor;
