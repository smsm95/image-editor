import React from "react";
import { Button, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const UploadBtn = ({ handleChange }) => {
  return (
    <Upload
      accept='image/*'
      multiple={false}
      showUploadList={false}
      onChange={handleChange}
      beforeUpload={(file) => {
        return false;
      }}>
      <Button icon={<CloudUploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadBtn;
