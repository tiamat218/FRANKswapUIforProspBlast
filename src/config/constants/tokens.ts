import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xB60dF4A1db61B173d0d774ffa813C3c37070E38b',
    18,
    'CAKE',
    'PancakeSwap Token',
  )
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x4300000000000000000000000000000000000003',
    18,
    'BUSD',
    'Binance USD',
  )
}

export const WBNB = new Token(ChainId.MAINNET,'0x4300000000000000000000000000000000000004', 18, 'WBNB', 'Wrapped BNB')
export const BTCB = new Token(ChainId.MAINNET,'0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692', 18, 'BTCB', 'Bitcoin')

// export const CAKE = new Token(ChainId.MAINNET,'0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', 18, 'CAKE', 'PancakeSwap Token')
// export const BUSD = new Token(ChainId.MAINNET,'0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'Binance USD')



const tokens = {

  bnb: {
    symbol: 'BNB',
    projectLink: '',
  },

  cake: {
    symbol: 'CAKE',
    address: {
      81457: '0xB60dF4A1db61B173d0d774ffa813C3c37070E38b',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      97: '',
    },
    decimals: 18,
    projectLink: '',
  },

  busd: {
    symbol: 'BUSD',
    address: {
      81457: '0x4300000000000000000000000000000000000003',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '',
    },
    decimals: 18,
    projectLink: '',
  },

  wbnb: {
    symbol: 'wBNB',
    address: {
      81457: '0x4300000000000000000000000000000000000004',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '',
    },
    decimals: 18,
    projectLink: '',
  },

  btcb: {
    symbol: 'BTCB',
    address: {
      81457: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      97: '',
    },
    decimals: 18,
    projectLink: '',
  },

}

export default tokens
