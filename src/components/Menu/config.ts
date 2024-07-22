import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: 'https://deploy-farm-ui-prosperity-swap.vercel.app/',
  },


  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: 'https://deploy-farm-ui-prosperity-swap.vercel.app/farms',
  },

  {
    label: t('Pool'),
    icon: 'PoolIcon',
    href: 'https://deploy-farm-ui-prosperity-swap.vercel.app/pools',
  },

  {
    label: t('Swap'),
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: 'Price Info',
    icon: 'InfoIcon',
    items: [

      {
        label: 'GMT on Dexscreener',
        href: 'https://dexscreener.com/blast/0xd0dc1af4f93916d662fdbcfaf5b5e2904f7d5514',
      }
    ],

  },





  {
    label: 'More / Team',
    icon: 'MoreIcon',
    items: [
    
      {
        label: 'Developer',
        href: 'https://linkedin.com/in/frank-kulow',
      },

      {
        label: 'Team',
        href: '/team',
      },
    ],
  },
  /* 


  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '/prediction',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
    status: {
      text: t('Win').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: t('Team Battle'),
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: t('Teams & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        label: t('Task Center'),
        href: '/profile/tasks',
      },
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pancakeswap.info',
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  }, */

]

export default config
