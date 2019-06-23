import React from 'react';
import 'antd/dist/antd.css';
import useWallet from './hooks/useWallet';

import { Layout, Typography } from 'antd';
import KeyUpload from './components/KeyUpload';
import Dashboard from './components/Dashboard';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  const [{ wallet, walletAddress }, setWallet] = useWallet();

  return (
    <Layout className="layout">
      <Header>
        <Title style={{ color: '#fff', padding: '15px' }} level={3}>
          Crypto Portfolio Tracker Arweave
        </Title>
      </Header>
      <Content style={{ padding: '25px 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {wallet ? (
            <Dashboard walletAddress={walletAddress} />
          ) : (
            <KeyUpload setWallet={setWallet} />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Crypto Portfolio Tracker Arweave ©2019 Created by Nitin Patel
      </Footer>
    </Layout>
  );
};

export default App;
