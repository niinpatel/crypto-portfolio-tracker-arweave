import React from 'react';
import 'antd/dist/antd.css';

import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <Title style={{ color: '#fff', padding: '15px' }} level={3}>
          Crypto Portfolio Tracker Arweave
        </Title>
      </Header>
      <Content style={{ padding: '25px 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Crypto Portfolio Tracker Arweave ©2019 Created by Nitin Patel
      </Footer>
    </Layout>
  );
};

export default App;
