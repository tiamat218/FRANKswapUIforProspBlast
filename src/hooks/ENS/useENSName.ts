import { namehash } from 'ethers/lib/utils'
import { useMemo } from 'react'
import { useSingleCallResult } from '../../state/multicall/hooks'
import { isAddress } from '../../utils'
import isZero from '../../utils/isZero'
import { useENSRegistrarContract, useENSResolverContract } from '../useContract'
import useDebounce from '../useDebounce'

export default function useENSName(address?: string): { ENSName: string | null; loading: boolean } {
  const debouncedAddress = useDebounce(address, 200)
  const ensNodeArgument = useMemo(() => {
    if (!debouncedAddress || !isAddress(debouncedAddress)) return [undefined]
    try {
      return [namehash(`${debouncedAddress.toLowerCase().substr(2)}.addr.reverse`)]
    } catch (error) {
      console.error('Invalid address for ENS name lookup:', error)
      return [undefined]
    }
  }, [debouncedAddress])

  const registrarContract = useENSRegistrarContract(false)
  const resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument)
  const resolverAddressResult = resolverAddress.result?.[0]

  const resolverContract = useENSResolverContract(resolverAddressResult || undefined, false)
  const name = useSingleCallResult(resolverContract, 'name', ensNodeArgument)

  const isResolverAddressValid = resolverAddressResult && !isZero(resolverAddressResult)

  return {
    ENSName: isResolverAddressValid ? name.result?.[0] ?? null : null,
    loading: resolverAddress.loading || name.loading,
  }
}
