import FilerobotImageEditor from "filerobot-image-editor";
import React from "react";

const ImageEditor = ({ imgSrc, onClose }) => {
  return (
    <FilerobotImageEditor
      config={{
        colorScheme: "light",
        isLowQualityPreview: true,
        tools: [
          "adjust",
          "effects",
          "filters",
          "rotate",
          "crop",
          "shapes",
          "text",
        ],
        translations: {
          en: {
            "header.image_editor_title": "Online Image Editor",
            "toolbar.download": "Download",
          },
        },
      }}
      show={imgSrc ? true : false}
      src={imgSrc}
      onClose={() => {
        onClose(null);
      }}
    />
  );
};

export default ImageEditor;
