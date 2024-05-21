import { VaultInfoResponseDto } from '../dto/vault-info-response.dto';

export const MockVaults: VaultInfoResponseDto[] = [
  {
    id: '0xc6c443312F73Bf31e544828782626ea6041E39F0',
    chain: 'eth',
    name: 'ETH',
    logoUrl: ['./icons/eth.svg'],
    apyIconUrls: ['./icons/comp.svg'],
    apyTokenSymbols: ['COMP'],
    tokenNames: ['ETH'],
    platform: ['Compound V3'],
    tags: ['Single'],
    tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    decimals: '18',
    vaultAddress: '0xc6c443312F73Bf31e544828782626ea6041E39F0',
    strategyAddress: '0xc6c443312F73Bf31e544828782626ea6041E39F0',
    cmcRewardTokenSymbols: ['FARM', 'WETH'],
    pricePerFullShare: '1045531119595415749',
    estimatedAPY: '2.44',
    estimatedAPYBreakdown: ['2.44'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: null,
    underlyingBalanceWithInvestment: '137544186981880711371',
    usdPrice: '3079.42',
    totalSupply: '131554369261725597629',
    totalValueLocked: '423556.32027574310021008482',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x3DA9D911301f8144bdF5c3c67886e5373DCdff8e',
    depositToken: {
      name: 'WETH',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimal: 18,
      usdPrice: '3079.42',
    },
    description:
      "The vault supplies WETH to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns COMP & IDLE rewards. At every harvest, the earned rewards are converted into more WETH to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.",
  },
  {
    id: '0x28c4b6A18CF5b6abCa7F6D8473126E55f3531f2E',
    chain: 'eth',
    name: 'cvxCRV',
    logoUrl: ['./icons/curve.svg', './icons/cvx.svg'],
    apyIconUrls: ['./icons/curve.svg', './icons/cvx.svg', './icons/3crv.svg'],
    apyTokenSymbols: ['CRV', 'CVX', '3CRV'],
    tokenNames: ['cvxCRV'],
    platform: ['Convex Finance'],
    tags: ['Single'],
    tokenAddress: '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7',
    decimals: '18',
    vaultAddress: '0x28c4b6A18CF5b6abCa7F6D8473126E55f3531f2E',
    strategyAddress: '0x28c4b6A18CF5b6abCa7F6D8473126E55f3531f2E',
    cmcRewardTokenSymbols: ['iFARM', 'CVX', 'CRV'],
    pricePerFullShare: '1202476853968178074',
    estimatedAPY: '13.04',
    estimatedAPYBreakdown: ['13.04'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: '13.45',
    underlyingBalanceWithInvestment: '40988359536959651806283',
    usdPrice: '0.374528',
    totalSupply: '34086609984797556323955',
    totalValueLocked: '15351.28832065842447170356',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x8002BD329b69802dBf7d7587C94a4b8D101FE7F0',
    depositToken: {
      name: 'cvxCRV',
      address: '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7',
      decimal: 18,
      usdPrice: '0.374528',
    },
    description:
      'The vault supplies cvxCRV in a Convex farm, earning CRV & CVX & 3CRV. At every harvest, the earned rewards are converted into more cvxCRV.',
  },
  {
    id: '0x06F33c607FFd801C4F64D07100e6df3F587Da25B',
    chain: 'eth',
    name: 'crvUSD, USDC',
    logoUrl: ['./icons/crvusd.svg', './icons/usdc.svg'],
    apyIconUrls: ['./icons/curve.svg', './icons/cvx.svg'],
    apyTokenSymbols: ['CRV', 'CVX'],
    tokenNames: ['crvUSD', 'USDC'],
    platform: ['Convex Finance'],
    tags: ['Stable'],
    tokenAddress: '0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E',
    decimals: '18',
    vaultAddress: '0x06F33c607FFd801C4F64D07100e6df3F587Da25B',
    strategyAddress: '0x06F33c607FFd801C4F64D07100e6df3F587Da25B',
    cmcRewardTokenSymbols: ['iFARM', 'CRV'],
    pricePerFullShare: '1051710037520068929',
    estimatedAPY: '8.45',
    estimatedAPYBreakdown: ['8.45'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: '8.71',
    underlyingBalanceWithInvestment: '35623963936642000170682',
    usdPrice: '1.00627507575484175657',
    totalSupply: '33872419836025589856469',
    totalValueLocked: '35847.50700903217948382422',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x1c3d9b350FdAde924Be90e57f2AF96cc65CEe27d',
    depositToken: {
      name: 'crvUSD/USDC',
      address: '0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E',
      decimal: 18,
      usdPrice: '1.00627507575484175657',
    },
    description:
      'The vault supplies Curve LP tokens in a Curve farm, earning CRV. At every harvest, the earned rewards are converted into more Curve LP tokens. Get the Curve LP tokens by supplying liquidity on Curve.',
  },
  {
    id: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
    chain: 'eth',
    name: 'DAI, USDC, USDT',
    logoUrl: ['./icons/dai.svg', './icons/usdc.svg', './icons/usdt.svg'],
    apyIconUrls: ['./icons/curve.svg', './icons/cvx.svg'],
    apyTokenSymbols: ['CRV', 'CVX'],
    tokenNames: ['DAI', 'USDC', 'USDT'],
    platform: ['Convex Finance'],
    tags: ['Stable'],
    tokenAddress: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
    decimals: '18',
    vaultAddress: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
    strategyAddress: '0x44BbFE8D7243CF97F69e1eFab6d7204aeadb986f',
    cmcRewardTokenSymbols: ['FARM', 'CVX', 'CRV'],
    pricePerFullShare: '1106977533904689073',
    estimatedAPY: '1.69',
    estimatedAPYBreakdown: ['1.69'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: null,
    underlyingBalanceWithInvestment: '222686779311936935620690',
    usdPrice: '1.03129995123477271776',
    totalSupply: '201166484857596305802730',
    totalValueLocked: '229656.86464502915580899253',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x27F12d1a08454402175b9F0b53769783578Be7d9',
    depositToken: {
      name: '3Crv',
      address: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
      decimal: 18,
      usdPrice: '1.03129995123477271776',
    },
    description:
      'The vault supplies 3CRV in a Convex farm, earning CRV & CVX. At every harvest, the earned rewards are converted into more 3CRV.',
  },
  {
    id: '0x99E22990CbDcd739123241ce64103c404593Bf81',
    chain: 'eth',
    name: 'OETH, ETH',
    logoUrl: ['./icons/oeth.svg', './icons/eth.svg'],
    apyIconUrls: ['./icons/curve.svg', './icons/cvx.svg'],
    apyTokenSymbols: ['CRV', 'CVX'],
    tokenNames: ['OETH', 'ETH'],
    platform: ['Convex Finance'],
    tags: ['LP'],
    tokenAddress: '0x94B17476A93b3262d87B9a326965D1E91f9c13E7',
    decimals: '18',
    vaultAddress: '0x99E22990CbDcd739123241ce64103c404593Bf81',
    strategyAddress: '0x99E22990CbDcd739123241ce64103c404593Bf81',
    cmcRewardTokenSymbols: ['iFARM', 'CVX', 'CRV'],
    pricePerFullShare: '1044324693356035677',
    estimatedAPY: '3.74',
    estimatedAPYBreakdown: ['3.74'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: '3.86',
    underlyingBalanceWithInvestment: '31372087731418427569',
    usdPrice: '3080.12503619013716949978',
    totalSupply: '30040549582909192155',
    totalValueLocked: '96629.95285909534250958019',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x17b4093F43266B1D5FebfaC02DA547007bC87A42',
    depositToken: {
      name: 'OETHCRV-f',
      address: '0x94B17476A93b3262d87B9a326965D1E91f9c13E7',
      decimal: 18,
      usdPrice: '3080.12503619013716949978',
    },
    description:
      'The vault supplies Curve LP tokens in a Convex farm, earning CRV & CVX. At every harvest, the earned rewards are converted into more Curve LP tokens. Get the Curve LP tokens by supplying liquidity on Curve.',
  },
  {
    id: '0x0F3653dFba5bfe981a58e94206653593b1dC0754',
    chain: 'eth',
    name: 'OETH, ETH',
    logoUrl: ['./icons/steth.svg', './icons/eth.svg'],
    apyIconUrls: ['./icons/curve.svg', './icons/cvx.svg'],
    apyTokenSymbols: ['CRV', 'CVX'],
    tokenNames: ['stETH', 'ETH'],
    platform: ['Convex Finance'],
    tags: ['LP'],
    tokenAddress: '0x21E27a5E5513D6e65C4f830167390997aA84843a',
    decimals: '18',
    vaultAddress: '0x0F3653dFba5bfe981a58e94206653593b1dC0754',
    strategyAddress: '0x0F3653dFba5bfe981a58e94206653593b1dC0754',
    cmcRewardTokenSymbols: ['FARM', 'CVX', 'CRV'],
    pricePerFullShare: '1188200040755083420',
    estimatedAPY: '0.86',
    estimatedAPYBreakdown: ['0.86'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: null,
    underlyingBalanceWithInvestment: '190959794847030420332',
    usdPrice: '3166.70692684699249619845',
    totalSupply: '160713506393820956435',
    totalValueLocked: '604713.70509137185590906582',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x2E25800957742C52b4d69b65F9C67aBc5ccbffe6',
    depositToken: {
      name: 'STETHCRV-f',
      address: '0x21E27a5E5513D6e65C4f830167390997aA84843a',
      decimal: 18,
      usdPrice: '3166.70692684699249619845',
    },
    description:
      'The vault supplies Curve LP tokens in a Curve farm, earning CRV & CVX. At every harvest, the earned rewards are converted into more Curve LP tokens. Get the Curve LP tokens by supplying liquidity on Curve.',
  },
  {
    id: '0xB445e1A353b3aed7fBe4c4558223a20A50978bF3',
    chain: 'eth',
    name: 'DAI',
    logoUrl: ['./icons/dai.svg'],
    apyIconUrls: ['./icons/comp.svg', './icons/idle.svg'],
    apyTokenSymbols: ['COMP', 'IDLE'],
    tokenNames: ['DAI'],
    platform: ['Idle'],
    tags: ['Stable'],
    tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: '18',
    vaultAddress: '0xB445e1A353b3aed7fBe4c4558223a20A50978bF3',
    strategyAddress: '0xB445e1A353b3aed7fBe4c4558223a20A50978bF3',
    cmcRewardTokenSymbols: ['FARM', 'DAI'],
    pricePerFullShare: '1190299142374102695',
    estimatedAPY: '10.00',
    estimatedAPYBreakdown: ['10.00'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: null,
    underlyingBalanceWithInvestment: '229525267579417684097356',
    usdPrice: '0.99987',
    totalSupply: '192829902508053305700270',
    totalValueLocked: '229495.42929463235979842334',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x15d3A64B2d5ab9E152F16593Cdebc4bB165B5B4A',
    depositToken: {
      name: 'DAI',
      address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      decimal: 18,
      usdPrice: '0.99987',
    },
    description:
      "The vault supplies DAI to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns COMP & IDLE rewards. At every harvest, the earned rewards are converted into more DAI to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.",
  },
  {
    id: '0x2a27DeB81bC1C23aA991884d6464233d80622c85',
    chain: 'eth',
    name: 'USDC',
    logoUrl: ['./icons/usdc.svg'],
    apyIconUrls: ['./icons/comp.svg', './icons/idle.svg'],
    apyTokenSymbols: ['COMP', 'IDLE'],
    tokenNames: ['USDC'],
    platform: ['Idle'],
    tags: ['Stable'],
    tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: '6',
    vaultAddress: '0x2a27DeB81bC1C23aA991884d6464233d80622c85',
    strategyAddress: '0x2a27DeB81bC1C23aA991884d6464233d80622c85',
    cmcRewardTokenSymbols: ['FARM', 'USDC'],
    pricePerFullShare: '1020024',
    estimatedAPY: '5.7',
    estimatedAPYBreakdown: ['5.7'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: null,
    underlyingBalanceWithInvestment: '2418014437170',
    usdPrice: '0.998819',
    totalSupply: '2370544898413',
    totalValueLocked: '2415158.76211970223',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x4F7c28cCb0F1Dbd1388209C67eEc234273C878Bd',
    depositToken: {
      name: 'USDC',
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimal: 6,
      usdPrice: '0.998819',
    },
    description:
      "The vault supplies USDC to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns COMP & IDLE rewards. At every harvest, the earned rewards are converted into more USDC to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.",
  },
  {
    id: '0x3Ec9f3d818388C3E71fdD1E412850f9F18586b8C',
    chain: 'eth',
    name: 'USDT',
    logoUrl: ['./icons/usdt.svg'],
    apyIconUrls: ['./icons/comp.svg', './icons/idle.svg'],
    apyTokenSymbols: ['COMP', 'IDLE'],
    tokenNames: ['USDT'],
    platform: ['Idle'],
    tags: ['Stable'],
    tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: '6',
    vaultAddress: '0x3Ec9f3d818388C3E71fdD1E412850f9F18586b8C',
    strategyAddress: '0x3Ec9f3d818388C3E71fdD1E412850f9F18586b8C',
    cmcRewardTokenSymbols: ['FARM', 'USDT'],
    pricePerFullShare: '1060522',
    estimatedAPY: '10.2',
    estimatedAPYBreakdown: ['10.2'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: null,
    underlyingBalanceWithInvestment: '174750562975',
    usdPrice: '0.997505',
    totalSupply: '164777868893',
    totalValueLocked: '174314.560320377375',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x6ac4a7AB91E6fD098E13B7d347c6d4d1494994a2',
    depositToken: {
      name: 'USDT',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      decimal: 6,
      usdPrice: '0.997505',
    },
    description:
      "The vault supplies USDT to Idle's Best Yield vault. Idle strategies rely on a combination of different protocols to boost your earnings (Compound, Aave, Clearpool, Morpho). The vault earns COMP & IDLE rewards. At every harvest, the earned rewards are converted into more USDT to compound your earnings. By participating to this vault, farmers are also entitled to FARM rewards that can be claimed separately.",
  },
  {
    id: '0xcF2c275b0533DCEe44b0dD752C26169fa3d36E31',
    chain: 'eth',
    name: 'YEL, ETH',
    logoUrl: ['./icons/yel.svg', './icons/eth.svg'],
    apyIconUrls: ['./icons/yel.svg'],
    apyTokenSymbols: ['YEL'],
    tokenNames: ['YEL', 'ETH'],
    platform: ['Sushiswap'],
    tags: ['LP'],
    tokenAddress: '0xc83cE8612164eF7A13d17DDea4271DD8e8EEbE5d',
    decimals: '18',
    vaultAddress: '0x81a276Cc1323A76ad0C71657139e6bCdC3C52b30',
    strategyAddress: '0xcF2c275b0533DCEe44b0dD752C26169fa3d36E31',
    cmcRewardTokenSymbols: ['iFARM', 'YEL', 'ETH'],
    pricePerFullShare: '2712384482679267701',
    estimatedAPY: '4.83',
    estimatedAPYBreakdown: ['4.83'],
    dailyAPY: '0.0067',
    boostedEstimatedAPY: '4.98',
    underlyingBalanceWithInvestment: '14441158641363530383127',
    usdPrice: '6.67113677565103839577',
    totalSupply: '5324156193040409469754',
    totalValueLocked: '96338.94449541103243764175',
    uniswapV3PositionId: null,
    uniswapV3UnderlyingTokenPrices: [],
    uniswapV3ManagedData: null,
    inactive: false,
    rewardPool: '0x54941AF9Eff1484DF58e250fE2FD3d79054ba269',
    depositToken: {
      name: 'YEL-ETH',
      address: '0xc83cE8612164eF7A13d17DDea4271DD8e8EEbE5d',
      decimal: 18,
      usdPrice: '6.67113677565103839577',
    },
    description:
      'The vault supplies Sushi LP tokens in a Sushi farm, earning pYEL. At every harvest, the earned rewards are converted into more Sushi LP tokens.',
  },
];
