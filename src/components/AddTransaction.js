import React from 'react';
import { Modal } from 'antd';

const AddTransaction = ({ visible, closeModal }) => {
  return (
    <Modal
      visible={visible}
      onOk={console.log}
      onCancel={() => closeModal(null)}
    >
      Form for adding transaction
    </Modal>
  );
};

export default AddTransaction;
