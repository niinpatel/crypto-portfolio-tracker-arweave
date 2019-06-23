import React, { useState, useEffect } from 'react';
import { getAllPortfolioTransactions } from '../api';
import { Table } from 'antd';
import moment from 'moment';

const Dashboard = ({ walletAddress }) => {
  const [portfolioTransactions, setPortfolioTransactions] = useState([]);

  useEffect(() => {
    getAllPortfolioTransactions(walletAddress).then(setPortfolioTransactions);
  }, [walletAddress]);

  return (
    <div>
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
    </div>
  );
};

export default Dashboard;
