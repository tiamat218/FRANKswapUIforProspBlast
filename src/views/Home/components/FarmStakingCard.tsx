import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import ConnectWalletButton from 'components/ConnectWalletButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/cake-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  // const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  // const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))


  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Farms & Staking')}
        </Heading>
        <CardImage src="/images/cake.svg" alt="cake logo" width={64} height={64} />
        <Block>
          <Label>{t('CAKE to Harvest')}:</Label>
        </Block>
        <Block>
          <Label>{t('CAKE in Wallet')}:</Label>
          <CakeWalletBalance />
        </Block>

      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
