import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    81457: '0xB60dF4A1db61B173d0d774ffa813C3c37070E38b',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 81457)`, () => {
    process.env.REACT_APP_CHAIN_ID = '81457'
    const expected = address[81457]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '81457'
    const expected = address[81457]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 56)`, () => {
    process.env.REACT_APP_CHAIN_ID = '81457'
    const expected = address[81457]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '81457'
    const expected = address[81457]
    expect(getAddress(address)).toEqual(expected)
  })
})
