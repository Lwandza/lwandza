//Dependencies
import React, {useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { WalletContext} from '@/context/WalletContext';
// import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
// import { signIn } from "next-auth/react";
// import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
// import { useRouter } from "next/router";
// import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { signIn } from "next-auth/react";
import { useEvmNativeBalance } from "@moralisweb3/next";
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');
// Icons
import { AiOutlineSearch } from 'react-icons/ai'

// Image
import logo from "../assets/logocv.png"


const styles = {
    container: 'flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed',
    leftHeader: 'flex flex-1',
    logo: 'object-scale-down cursor-pointer',
    searchWrapper: 'flex flex-1',
    searchInputContainer:
      'text-white items-center flex  flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 rounded-lg',
    searchIcon: 'text-gray-400 text-3xl mr-3',
    searchInputWrapper: 'text-gray-400 text-lg w-full',
    searchInput: 'bg-transparent outline-none w-full',
    rightHeader: 'flex items-center justify-end text-white gap-8',
    menuItem: 'cursor-pointer font-bold hover:text-green-500 duration-300',
  }
  
const isAuthenticated = false
function Header() {
  // useEffect(() => {
  //     console.log('coinSelect:',coinSelect)
  //     }, [])
  
  const {
          handleAuth,
          isConnected,formattedAccount,currentAccount}
          =useContext(WalletContext)
          const { data: nativeBalance } = useEvmNativeBalance({ currentAccount });
          console.log(nativeBalance?.balance.ether);
   
          useEffect(() => {
            if (!currentAccount) {return}
            else{
              
              runApp();
            }
            
          }, [currentAccount])
        
          const runApp = async () => {
            if(!Moralis.Core.isStarted){
              await Moralis.start({apiKey: "8KIbgDapUnsH9w9YiNWnEND7zhFyZBZwTcd08MxjjxVkpCWnc38A8AgQI7wt7HvR",});
          }
            
            const address =currentAccount;
          
            const chain = EvmChain.BSC;
          
            const response = await Moralis.EvmApi.token.getWalletTokenBalances({
              address,
              chain,
            });
            
            console.log(response.toJSON());

            const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
              address,
              chain,
            });
          
            console.log(responseTrans.toJSON());
          
          }
  return (
    <div className={styles.container}>
        <div className={styles.leftHeader}>
        <Link href='/'>
        <Image src={logo} height={100} width={100} className={styles.logo}/>
        </Link>
          
        </div>
        <div className={styles.searchWrapper}>
            <div className={styles.searchInputContainer}>
                <AiOutlineSearch className={styles.searchIcon}/>
                <div className={styles.searchInputWrapper}>
                    <input placeholder='Search...' className={styles.searchInput}/>
                </div>
            </div>
        </div>
        <div className={styles.rightHeader}>
            <div className={styles.menuItem}>Rewards</div>
            <div className={styles.menuItem}>Portfolio</div>
            <div className={styles.menuItem}>{currentAccount}</div>
            <div className={styles.menuItem}>{nativeBalance?.balance.ether} ETH</div>
            {/* <div className={styles.menuItem}>Messages</div> */}
            {isConnected && (
          <>
            <div className={styles.menuItem}>{formattedAccount}</div>
            <div className={styles.menuItem} onClick={() => handleAuth()}>
              Logout
            </div>
          </>
        )}

        {!isConnected && (
          <div className={styles.menuItem} onClick={() => handleAuth()}>
            Login
          </div>
        )}
        </div>
    </div>
  )
}

export default Header