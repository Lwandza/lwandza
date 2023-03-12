import  React, { createContext, useEffect, useState } from 'react'
// import { useMoralis } from 'react-moralis'
//  
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { signIn, signOut  } from "next-auth/react";

export const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [formattedAccount, setFormattedAccount] = useState('')

  const { connectAsync } = useConnect();

  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();

  const handleAuth = async () => {
    console.log("pressed:",isConnected)
    if (isConnected) {

      await signOut()
      console.log("pressed True:",isConnected)
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });


    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,

    });
    

    let formatAccount = account.slice(0, 4) + '...' + account.slice(-4)
      setFormattedAccount(formatAccount)

      console.log(url)
      setCurrentAccount(account)

  };
  
  

  useEffect(() => {
    if (!currentAccount) return
    ;(async () => {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: currentAccount,
        }),
      })

      const data = await response.json()
    })()
  }, [currentAccount])

  return (
    <WalletContext.Provider
      value={{
        handleAuth,
        isConnected,

        currentAccount,
 
        formattedAccount,

    

      }}
    >
      {children}
    </WalletContext.Provider>
  )
}