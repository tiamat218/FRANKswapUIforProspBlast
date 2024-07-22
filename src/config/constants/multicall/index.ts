import { ChainId } from '@pancakeswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xf48e6c751bfcC111eDb33804E9aF013aC4Cbf8FB',  // todo multicall addr
  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
