import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {WalletProvider} from '../context/WalletContext'
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { goerli } from "wagmi/chains";
import Navbar from '../components/Navbar';
 
const { provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});


export default function App({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <WalletProvider>
        <Navbar />
        <Component {...pageProps} />
        </WalletProvider>
      </SessionProvider>
    </WagmiConfig>
    
  )
}
