import type { Loadable } from '@/store/common'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import { GAS_PRICE_TYPE, RPC_AUTHENTICATION } from '@safe-global/safe-gateway-typescript-sdk/dist/types/chains'

export const masa: ChainInfo = {
  transactionService: 'https://safe-transaction-polygon.staging.5afe.dev/',
  chainId: '13396',
  chainName: 'Masa',
  shortName: 'masa',
  l2: false,
  isTestnet: false,
  description: 'Masa',
  chainLogoUri: '/images/networks/masa.png',
  rpcUri: {
    authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
    value: 'https://subnets.avax.network/masanetwork/mainnet/rpc',
  },
  safeAppsRpcUri: {
    authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
    value: 'https://subnets.avax.network/masanetwork/mainnet/rpc',
  },
  publicRpcUri: {
    authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
    value: 'https://subnets.avax.network/masanetwork/mainnet/rpc',
  },
  blockExplorerUriTemplate: {
    address: 'https://subnets.avax.network/masa/address/{{address}}',
    txHash: 'https://subnets.avax.network/masa/tx/{{txHash}}',
    api: '',
  },
  nativeCurrency: {
    name: 'Masa Token',
    symbol: 'MASA',
    decimals: 18,
    logoUri: 'https://safe.masa.finance/images/networks/masa.png',
  },
  theme: {
    textColor: 'white',
    backgroundColor: 'black',
  },
  gasPrice: [
    {
      type: GAS_PRICE_TYPE.UNKNOWN,
    },
  ],

  disabledWallets: [],
  features: [],
}

export const masaTest: ChainInfo = {
  transactionService: 'https://safe-transaction-polygon.staging.5afe.dev/',
  chainId: '103454',
  chainName: 'Masa Testnet',
  shortName: 'masatest',
  l2: false,
  isTestnet: true,
  description: 'Masa Testnet',
  chainLogoUri: '/images/networks/masa.png',
  rpcUri: {
    authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
    value: 'https://subnets.avax.network/masatestne/testnet/rpc',
  },
  safeAppsRpcUri: {
    authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
    value: 'https://subnets.avax.network/masatestne/testnet/rpc',
  },
  publicRpcUri: {
    authentication: RPC_AUTHENTICATION.NO_AUTHENTICATION,
    value: 'https://subnets.avax.network/masatestne/testnet/rpc',
  },
  blockExplorerUriTemplate: {
    address: 'https://subnets-test.avax.network/masatestnet/address/{{address}}',
    txHash: 'https://subnets-test.avax.network/masatestnet/tx/{{txHash}}',
    api: '',
  },
  nativeCurrency: {
    name: 'Masa Token',
    symbol: 'MASA',
    decimals: 18,
    logoUri: 'https://safe.masa.finance/images/networks/masa.png',
  },
  theme: {
    textColor: 'white',
    backgroundColor: 'black',
  },
  gasPrice: [
    {
      type: GAS_PRICE_TYPE.UNKNOWN,
    },
  ],

  disabledWallets: [],
  features: [],
}

export const loadMasa = <N extends string, T>(name: N, data: T) => {
  type SliceState = Loadable<T>

  const initialState: SliceState = {
    data,
    loading: false,
  }

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      set: (_, { payload }: PayloadAction<Loadable<T | undefined>>): SliceState => ({
        ...payload,
        data: initialState.data, // fallback to initialState.data
      }),
    },
  })

  const selector = (state: Record<N, SliceState>): SliceState => state[name]

  return {
    slice,
    selector,
  }
}
