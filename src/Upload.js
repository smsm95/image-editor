import React from "react";
import { Button, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";

const UploadBtn = ({ onChange }) => {
  return (
    <Upload
      accept='image/*'
      multiple={false}
      showUploadList={false}
      onChange={(info) => onChange(info)}
      beforeUpload={(file) => {
        return false;
      }}>
      <Button icon={<CloudUploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadBtn;
