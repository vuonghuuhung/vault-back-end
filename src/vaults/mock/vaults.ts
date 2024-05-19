export const MockVaults = [
  {
    id: '0xc6c443312F73Bf31e544828782626ea6041E39F0',
    chain: 'eth',
    name: 'ETH',
    logoUrl: ['./icons/eth.svg'],
    tokenNames: ['ETH'],
    platform: ['Compound'],
    tags: ['Single'],
    liveAPY: 5.0,
    dailyAPY: 0.015,
    lastHarvest: 1716111548,
    shareBalance: 1000000, // in vault Token
    balanceUnderlyingWithInvestment: 1000000, // in underlying Token
    sharePrice: 1000000, // in underlying Token
    tvl: 1000000, // in underlying Token
    tvlUsd: 1000000, // in USD
    underlyingInfo: {
      name: 'WETH',
      symbol: 'WETH',
      decimals: 18,
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      priceInUSD: 3000,
    },
    description: 'ETH Vault',
    vaultAddress: '0xc6c443312F73Bf31e544828782626ea6041E39F0',
    poolAddress: '0xc6c443312F73Bf31e544828782626ea6041E39F0',
  },
  {
    id: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
    chain: 'eth',
    name: 'DAI, USDC, USDT',
    logoUrl: ['./icons/dai.svg', './icons/usdc.svg', './icons/usdt.svg'],
    tokenNames: ['DAI', 'USDC', 'USDT'],
    platform: ['Convex Finance'],
    tags: ['Stable'],
    liveAPY: 5.0,
    dailyAPY: 0.015,
    lastHarvest: 1716111548,
    shareBalance: 1000000, // in vault Token
    balanceUnderlyingWithInvestment: 1000000, // in underlying Token
    sharePrice: 1000000, // in underlying Token
    tvl: 1000000, // in underlying Token
    tvlUsd: 1000000, // in USD
    underlyingInfo: {
      name: 'Curve.fi DAI/USDC/USDT',
      symbol: '3Crv',
      decimals: 18,
      address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
      priceInUSD: 1.032,
    },
    description: 'DAI, USDC, USDT Vault',
    vaultAddress: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
    poolAddress: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
  },
  {
    id: '0x06F33c607FFd801C4F64D07100e6df3F587Da25B',
    chain: 'eth',
    name: 'DAI, USDC, USDT',
    logoUrl: ['./icons/dai.svg', './icons/usdc.svg', './icons/usdt.svg'],
    tokenNames: ['DAI', 'USDC', 'USDT'],
    platform: ['Convex Finance'],
    tags: ['Stable'],
    liveAPY: 5.0,
    dailyAPY: 0.015,
    lastHarvest: 1716111548,
    shareBalance: 1000000, // in vault Token
    balanceUnderlyingWithInvestment: 1000000, // in underlying Token
    sharePrice: 1000000, // in underlying Token
    tvl: 1000000, // in underlying Token
    tvlUsd: 1000000, // in USD
    underlyingInfo: {
      name: 'Curve.fi DAI/USDC/USDT',
      symbol: '3Crv',
      decimals: 18,
      address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
      priceInUSD: 1.032,
    },
    description: 'DAI, USDC, USDT Vault',
    vaultAddress: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
    poolAddress: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
  },
];
