import { connectors } from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import {
  bscPools,
  hecoPools,
  avalanchePools,
  bscStakePools,
  hecoStakePools,
  avalancheStakePools,
} from '../configure';

export const getNetworkPools = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return bscPools;
    case '128':
      return hecoPools;
    case '43114':
      return avalanchePools;
    default:
      return [];
  }
};

export const getNetworkStakePools = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return bscStakePools;
    case '128':
      return hecoStakePools;
    case '43114':
      return avalancheStakePools;
    default:
      return [];
  }
};

export const getNetworkStables = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return ['BUSD', 'USDT', 'USDC', 'DAI', 'VAI', 'QUSD', 'UST', 'VENUS BLP', '3EPS'];
    case '128':
      return ['USDT', 'HUSD'];
    case '43114':
      return ['USDT', 'DAI', 'BUSD'];
    default:
      return [];
  }
};

export const getNetworkMulticall = () => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return '0xB94858b0bB5437498F5453A16039337e5Fdc269C';
    case '128':
      return '0x2776CF9B6E2Fa7B33A37139C3CB1ee362Ff0356e';
    case '43114':
      return '0x6FfF95AC47b586bDDEea244b3c2fe9c4B07b9F76';
    default:
      return '';
  }
};

export const getNetworkConnectors = t => {
  switch (process.env.REACT_APP_NETWORK_ID) {
    case '56':
      return {
        network: 'binance',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                1: 'https://bsc-dataseed.binance.org/',
                56: 'https://bsc-dataseed.binance.org/',
              },
            },
          },
          'custom-binance': {
            display: {
              name: 'Binance',
              description: t('Binance Chain Wallet'),
              logo: require(`images/wallets/binance-wallet.png`),
            },
            package: 'binance',
            connector: async (ProviderPackage, options) => {
              const provider = window.BinanceChain;
              await provider.enable();
              return provider;
            },
          },
          'custom-math': {
            display: {
              name: 'Math',
              description: t('Math Wallet'),
              logo: require(`images/wallets/math-wallet.svg`),
            },
            package: 'math',
            connector: connectors.injected,
          },
          'custom-twt': {
            display: {
              name: 'Trust',
              description: t('Trust Wallet'),
              logo: require(`images/wallets/trust-wallet.svg`),
            },
            package: 'twt',
            connector: connectors.injected,
          },
          'custom-safepal': {
            display: {
              name: 'SafePal',
              description: t('SafePal App'),
              logo: require(`images/wallets/safepal-wallet.svg`),
            },
            package: 'safepal',
            connector: connectors.injected,
          },
        },
      };
    case '128':
      return {
        network: 'heco',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                1: 'https://http-mainnet.hecochain.com',
                128: 'https://http-mainnet.hecochain.com',
              },
            },
          },
          'custom-math': {
            display: {
              name: 'Math',
              description: t('Math Wallet'),
              logo: require(`images/wallets/math-wallet.svg`),
            },
            package: 'math',
            connector: connectors.injected,
          },
        },
      };
    case '43114':
      return {
        network: 'avalanche',
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: 'Injected',
              description: t('Home-BrowserWallet'),
            },
          },
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                1: 'https://api.avax.network/ext/bc/C/rpc',
                43114: 'https://api.avax.network/ext/bc/C/rpc',
              },
            },
          },
        },
      };
    default:
      return {};
  }
};
