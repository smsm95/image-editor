import React from "react";
import { message, Button, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const UploadBtn = ({ onChange }) => {
  return (
    <Upload
      accept='image/*'
      multiple={false}
      showUploadList={false}
      onChange={(info) => {
        if (info.file.status !== "uploading") {
          message.success(`${info.file.name} file uploaded successfully`);
          onChange(info.file);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }}
      beforeUpload={(file) => {
        return false;
      }}>
      <Button icon={<CloudUploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadBtn;
