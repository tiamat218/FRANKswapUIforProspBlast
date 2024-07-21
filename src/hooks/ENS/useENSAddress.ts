import { namehash } from 'ethers/lib/utils'
import { useMemo } from 'react'
import { useSingleCallResult } from '../../state/multicall/hooks'
import isZero from '../../utils/isZero'
import { useENSRegistrarContract, useENSResolverContract } from '../useContract'
import useDebounce from '../useDebounce'

export default function useENSAddress(ensName?: string | null): { loading: boolean; address: string | null } {
  const debouncedName = useDebounce(ensName, 200)
  const ensNodeArgument = useMemo(() => {
    if (!debouncedName) return [undefined]
    try {
      return [namehash(debouncedName)]
    } catch (error) {
      console.error('Invalid ENS name:', error)
      return [undefined]
    }
  }, [debouncedName])

  const registrarContract = useENSRegistrarContract(false)
  const resolverAddress = useSingleCallResult(registrarContract, 'resolver', ensNodeArgument)
  const resolverAddressResult = resolverAddress.result?.[0]

  const resolverContract = useENSResolverContract(resolverAddressResult || undefined, false)
  const address = useSingleCallResult(resolverContract, 'addr', ensNodeArgument)

  const isResolverAddressValid = resolverAddressResult && !isZero(resolverAddressResult)

  return {
    address: isResolverAddressValid ? address.result?.[0] ?? null : null,
    loading: resolverAddress.loading || address.loading,
  }
}
