import arweave from './arweaveSetup';

export const getWalletAddress = async wallet =>
  arweave.wallets.jwkToAddress(wallet);
