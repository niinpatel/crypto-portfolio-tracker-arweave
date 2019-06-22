import React from 'react';
import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

const KeyUpload = ({ setWallet }) => {
  const handleKeyUpload = info => {
    const { status } = info.file;
    if (status === 'uploading') return;

    if (status === 'error') {
      console.log(info);
      return message.error(`${info.file.name} file upload failed.`);
    }

    const file = info.file.originFileObj;
    const filereader = new FileReader();

    filereader.addEventListener('loadend', async event => {
      try {
        const wallet = JSON.parse(event.target.result);
        await setWallet(wallet);
      } catch (e) {
        message.error(`Something went wrong please try again.`);
        console.log(e);
      }
    });

    filereader.readAsText(file);
  };

  const fakeCustomRequest = ({ _, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  return (
    <Dragger
      name="key-upload"
      multiple={false}
      onChange={handleKeyUpload}
      customRequest={fakeCustomRequest} // this is a workaround, fake request which does nothing
      accept="application/json"
    >
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Drop a wallet keyfile to login</p>
    </Dragger>
  );
};

export default KeyUpload;
