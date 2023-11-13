export const cardItems = [
  {
    imageSrc: () => require("../images/cryptopunks.png"),
    heading: "CrptoPunks",
    body: "CryptoPunks launched as a fixed set of 10,000...",
    pageUrl: "https://www.larvalabs.com/cryptopunks",
  },
  {
    imageSrc: () => require("../images/toshies.png"),
    heading: "TOSHIES",
    body: "Step into the pixelated world of Toshi...",
    pageUrl: "https://toshies.xyz/",
  },
  {
    imageSrc: () => require("../images/sewerpass.png"),
    heading: "Sewer Pass",
    body: "A Sewer Pass grants access to Yuga Labs' Dookey...",
    pageUrl: "https://opensea.io/collection/sewerpass",
  },
];

export const supplyData = [
  {
    asset: "BAYC",
    logo: () => require("../images/bayc.png"),
    worth: "64.19 ETH",
    apy: "1.18%",
    collateral: () => require("../images/true.png"),
    button: "Supply",
    disbled: false,
  },
  {
    asset: "Ponzi",
    logo: () => require("../images/ponzi.png"),
    worth: "0.09 ETH",
    apy: "-",
    collateral: () => require("../images/false.png"),
    button: "Supply",
    disbled: true,
  },
  {
    asset: "CP",
    logo: () => require("../images/cp.png"),
    worth: "64.09 ETH",
    apy: "1.18%",
    collateral: () => require("../images/true.png"),
    button: "Claim",
    disbled: false,
  },
];

export const borrowData = [
  {
    asset: "ETH",
    logo: () => require("../images/eth.png"),
    available: "$100,000",
    apy: "1.18%",
    stable: "-",
    button: "enabled",
  },
  {
    asset: "USDC",
    logo: () => require("../images/usdc.png"),
    available: "$1,980,789",
    apy: "-",
    stable: "11.06%",
    button: "enabled",
  },
  {
    asset: "USDT",
    logo: () => require("../images/usdt.png"),
    available: "0",
    apy: "1.18%",
    stable: "12.46%",
    button: "disabled",
  },
  {
    asset: "WBTC",
    logo: () => require("../images/wbtc.png"),
    available: "0",
    apy: "1.10%",
    stable: "4.47%",
    button: "disabled",
  },
  {
    asset: "DAI",
    logo: () => require("../images/dai.png"),
    available: "$50,644",
    apy: "2.80%",
    stable: "12.05%",
    button: "enabled",
  },
  {
    asset: "FRAX",
    logo: () => require("../images/frax.png"),
    available: "0",
    apy: "-",
    stable: "-",
    button: "disabled",
  },
];

export const tokenData = [
  {
    asset: "ETH",
    logo: () => require("../images/eth.png"),
    pool: "$8M",
    supply_apy: "0%",
    borrowed: "-",
    variable_apy: "-",
    stable_apy: "-",
    pageUrl: "https://ethereum.org/en/",
  },
  {
    asset: "USDC",
    logo: () => require("../images/usdc.png"),
    pool: "$189M",
    supply_apy: "0%",
    borrowed: "$480.42K",
    variable_apy: "2.08%",
    stable_apy: "12.08%",
    pageUrl: "https://makerdao.com/",
  },
  {
    asset: "USDT",
    logo: () => require("../images/usdt.png"),
    pool: "$8M",
    supply_apy: "3.08%",
    borrowed: "$3.87M",
    variable_apy: "2.09%",
    stable_apy: "11.07%",
    pageUrl: "https://tether.to/",
  },
  {
    asset: "WBTC",
    logo: () => require("../images/wbtc.png"),
    pool: "$8M",
    supply_apy: "0%",
    borrowed: "-",
    variable_apy: "-",
    stable_apy: "-",
    pageUrl: "https://www.wbtc.network/",
  },
  {
    asset: "DAI",
    logo: () => require("../images/dai.png"),
    pool: "$8M",
    supply_apy: "0%",
    borrowed: "-",
    variable_apy: "-",
    stable_apy: "-",
    pageUrl: "https://makerdao.com/",
  },
  {
    asset: "FRAX",
    logo: () => require("../images/frax.png"),
    pool: "$8M",
    supply_apy: "0%",
    borrowed: "-",
    variable_apy: "-",
    stable_apy: "-",
    pageUrl: "https://makerdao.com/",
  },
];

export const supplyHeadData = [
  "Assets",
  "Worth",
  "APY",
  "Supported Collateral",
];

export const borrowHeadData = ["Assets", "Available", "APY", "APY, stable"];

export const marketHeadData = [
  "Assets",
  "Total pool supply",
  "Supply APY",
  "Total borrowed",
  "Borrow APY, variable",
  "Borrow APY, stable",
];
