import React, { useState, useEffect } from 'react';
import { getAllPortfolioTransactions } from '../api';
import { Table, Button } from 'antd';
import moment from 'moment';

import AddTransaction from './AddTransaction';

const Dashboard = ({ walletAddress, wallet }) => {
  const [portfolioTransactions, setPortfolioTransactions] = useState([]);
  const [addTransactionVisible, setAddTransactionVisible] = useState(false);

  useEffect(() => {
    getAllPortfolioTransactions(walletAddress).then(setPortfolioTransactions);
  }, [walletAddress]);

  return (
    <div>
      <Button
        onClick={() => setAddTransactionVisible(true)}
        type="primary"
        size="large"
      >
        Add A Transaction
      </Button>

      {portfolioTransactions.length ? (
        <Table
          dataSource={portfolioTransactions}
          columns={[
            { title: 'CoinName', dataIndex: 'CoinName', key: 'CoinName' },
            { title: 'Amount', dataIndex: 'Amount', key: 'Amount' },
            {
              title: 'TransactionType',
              dataIndex: 'TransactionType',
              key: 'TransactionType'
            },
            {
              title: 'Time',
              dataIndex: 'Time',
              key: 'Time',
              render: unixTime =>
                moment(unixTime * 1000).format('MMMM Do YYYY, h:mm:ss a')
            }
          ]}
          rowKey={JSON.stringify}
        />
      ) : (
        <div>
          <p>Your transaction data will appear here.</p>
          <p>
            If you have added a transaction recently, please wait some time for
            it to reflect on the blockchain.
          </p>
        </div>
      )}

      <AddTransaction
        visible={addTransactionVisible}
        closeModal={() => {
          setAddTransactionVisible(false);
        }}
        wallet={wallet}
      />
    </div>
  );
};

export default Dashboard;
