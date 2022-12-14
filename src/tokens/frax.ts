import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";
export default {
  name: "FRAX",
  symbol: "FRAX",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/FRAX.png",
  priceSources: [{ source: "coingecko", apiId: "frax" }],
  purchaseLinks: { 
  [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/",
  [CHAIN_ID.ARBITRUM_MAINNET]: "https://saddle.exchange/#/",
}, 
  addresses: { 
  [CHAIN_ID.ETHEREUM_MAINNET]: "0x853d955acef822db058eb8505911ed77f175b99e" ,
  [CHAIN_ID.ARBITRUM_MAINNET]: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
},
};
