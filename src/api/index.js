import arweave from './arweaveSetup';
import { currentUnixTime } from './utils';

export const getWalletAddress = async wallet =>
  arweave.wallets.jwkToAddress(wallet);

export const getAllPortfolioTransactions = () =>
  Promise.resolve([
    {
      CoinName: 'Ethereum',
      Amount: 0.32,
      TransactionType: 'Buy',
      Time: currentUnixTime()
    },
    {
      CoinName: 'Bitcoin',
      Amount: 0.04,
      TransactionType: 'Sell',
      Time: currentUnixTime()
    }
  ]);
