import { MoralisNextApi } from "@moralisweb3/next";
const apiKeyFound = process.env.MORALIS_API_KEY,
export default MoralisNextApi({
  apiKey: process.env.MORALIS_API_KEY!,
  authentication: {
    domain: "lwandza.dapp",
    uri: process.env.NEXTAUTH_URL!,
    timeout: 120,
  },
});