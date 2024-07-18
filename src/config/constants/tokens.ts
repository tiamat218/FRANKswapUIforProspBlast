import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    18,
    'CAKE',
    'PancakeSwap Token',
  )
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  )

}

export const WBNB = new Token(ChainId.MAINNET,'0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const DAI = new Token(ChainId.MAINNET,'0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET,'0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET,'0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(ChainId.MAINNET,'0x23396cF899Ca06c4472205fC903bDB4de249D6fC',  18,  'UST',  'Wrapped UST Token')
export const ETH = new Token(ChainId.MAINNET,'0x2170Ed0880ac9A755fd29B2688956BD959F933F8',  18,  'ETH',  'Binance-Peg Ethereum Token')
export const USDC = new Token(ChainId.MAINNET,'0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC',  'Binance-Peg USD Coin')


const tokens = {

  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },

  cake: {
    symbol: 'CAKE',
    address: {
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },

  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://pancakeswap.finance/',
  },

 


}

export default tokens
