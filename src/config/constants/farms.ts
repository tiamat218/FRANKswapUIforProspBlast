import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'WETH-GMT LP',
    lpAddresses: {
      81457: '0xd0dc1af4f93916d662fdbcfaf5b5e2904f7d5514',
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'WETH-USDB LP',
    lpAddresses: {
      81457: '0xc715cb6e8a172473d56221218586ccea6b33428a',
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'WETH-BTC LP',
    lpAddresses: {
      81457: '0xbb046b9d386ac5c9409d5ad89c67dfe293322aa3',
      97: '',      
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  },

  {
    pid: 3,
    lpSymbol: 'USDB-GMT LP',
    lpAddresses: {
      81457: '0xb60df4a1db61b173d0d774ffa813c3c37070e38b',
      97: '',      
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },

]

export default farms
