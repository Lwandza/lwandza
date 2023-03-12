//Dependencies
// import axios from 'axios'
import  React, {useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { signIn } from "next-auth/react";
import { useEvmNativeBalance } from "@moralisweb3/next";
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');
//Components
import Header from '../components/Header'


import { WalletContext } from '@/context/WalletContext'
//Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
// Image
import logo from "../assets/logocv.png"
const styles = {
  menuItem: 'cursor-pointer font-bold text-gray-400 hover:text-green-500 duration-300',
  wrapper: 'w-screen h-screen flex flex-col ',
  mainContainer: 'w-full h-full m-auto flex mt-16 ',
  leftMain: 'flex flex-col w-3/4 h-full  p-6 overflow-y-scroll',
  portfolioAmountContainer: 'flex flex-col ',
  portfolioAmount: 'text-black text-4xl',
  portfolioPercent: 'text-black font-bold text-sm',
  pastHour: 'text-gray-400',
  chartContainer:
    'text-5xl flex justify-center w-full h-1/3 text-black mt-11 mb-11',
  tokenTablesHeaders:
    'w-full border-t mb-10 mt-10 h-16 border-[#30363b] flex justify-center items-center p-4',
  tokenTablesTitle: 'text-red font-bolder text-xl text-center',
  buyingPowerContainer:
    'w-full border-t border-b h-16 border-[#30363b] flex justify-between items-center p-4',
  buyingPowerTitle: 'text-white font-bolder text-lg',
  buyingPowerAmount: 'text-white   font-bolder text-xl',
  rightMain:
    'flex flex-col flex-1 h-4/5 bg-[#5d001e] mt-6 rounded-lg overflow-y-scroll noScroll',
  rightMainItem: 'flex items-center text-white p-5 border-b border-[#1E2123]',
  ItemTitle: 'flex-1 font-bold',
  moreOptions: 'cursor-pointer text-xl',
  select: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-transparent mt-6 text-white placeholder:text-white`,
  options: `w-1/2 flex items-center justify-center border border-white rounded-lg p-2 bg-black mt-6 text-white placeholder:text-white`,
  tableHead:"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700",
 tableBody:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4",
 tableDiv:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-pink-900 text-white",
}
const Crypto = () => {
  const {handleAuth,isConnected,formattedAccount,currentAccount}=useContext(WalletContext)
    const { data: nativeBalance } = useEvmNativeBalance({ currentAccount });
    console.log(nativeBalance?.balance.goerli);
    const [value, setValue] = useState("BNB");
    const [tokenChain, setTokenChain] = useState("BNB");
    const [tokenBalance, setTokenBalance] = useState("");
    const [tokensList, setTokenList] = useState([]);
    const tokensListAddress=[];
    const [tokensTransfers, setTokenTransfers] = useState([]);
    const [tokensTransactions, setTokenTransactions] = useState([]);
    const [totalTransfers, setTotalTransfers] = useState(0);
    const [totalTrans, setTotalTrans] = useState(0);
    // const [finalTokensHistory, setFinalTokensHistory] = useState([]);
    const amountOfItems =10
    // const d = new Date();

    const currentDate = Date.now()
    const oneDaysAgo=(Date.now() - 1 * 24 * 60 * 60 * 1000) 
    const dates =[oneDaysAgo,currentDate]

    const [startBlock, setStartBlock] = useState("");
    const [endBlock, setEndBlock] = useState("");
    useEffect(() => {
      console.log('current',currentDate)
      console.log('last week',oneDaysAgo)
      console.log('dates',dates)
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

    
      if(value == "BNB"){
        const chain = EvmChain.BSC;
        var liveBlockOne=''
        var liveBlockTwo=''
        for(let i = 0; i < dates.length; i++){
          if(i==0){
  
            console.log('first',dates[i])
            const date = dates[i];
            const responseStartBlock = await Moralis.EvmApi.block.getDateToBlock({
              date,
              chain,
            });
            
            console.log(responseStartBlock.toJSON());
            const sample = responseStartBlock.toJSON()
            console.log("Block one",sample.block)
            liveBlockOne=sample.block
            setStartBlock(sample.block)
          }
          else if(i==1){
            console.log('second',dates[i])
            const date = dates[i];
            const responseEndBlock = await Moralis.EvmApi.block.getDateToBlock({
              date,
              chain,
            });
            
            console.log(responseEndBlock.toJSON());
            const sampletwo = responseEndBlock.toJSON()
            console.log("Block two",sampletwo.block)
            liveBlockTwo=sampletwo.block
            setEndBlock(sampletwo.block)
          }
          else{
            console.log('done')
          }
        }
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address,
          chain,
        });
        setTokenList(response.toJSON())
        console.log(response.toJSON());

        const fistAdd= response.toJSON()
        console.log(fistAdd[0].token_address)
  
        const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
          address,
          chain,
        });
      
        console.log(responseTrans.toJSON());
        const tryresponseTrans = responseTrans.toJSON()
        setTokenTransfers(tryresponseTrans.result)
        
        setTotalTransfers(tryresponseTrans.result.length) 
        const responseNative = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
         setTokenBalance(responseNative.balance)
        //  const checkBalance = BigInt(responseNative.balance)/1000000000000000000
          console.log(responseNative.toJSON());
          const test =responseNative.toJSON()
          const newBal = test.balance/1000000000000000000
          const finalBalance = newBal.toString()
          setTokenBalance(finalBalance.slice(0,6))
          
          console.log("test",test.balance);
          console.log("finalBalance",finalBalance);

          const responseTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain,
        });
      
      console.log(responseTransactions.toJSON());
          // console.log(checkBalance)
          const tryresults = responseTransactions.toJSON()
          setTokenTransactions(tryresults.result)
          
          setTotalTrans(tryresults.result.length) 
          
      }
      else if(value == "ETH"){
        console.log('value changed')
        const chain = EvmChain.ETHEREUM;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address,
          chain,
        });
        setTokenList(response.toJSON())
        console.log(response.toJSON());
  
        const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
          address,
          chain,
        });
      
        console.log(responseTrans.toJSON());
        const tryresponseTrans = responseTrans.toJSON()
        setTokenTransfers(tryresponseTrans.result)
        
        setTotalTransfers(tryresponseTrans.result.length) 
        const responseNative = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
         setTokenBalance(responseNative.balance)
        //  const checkBalance = BigInt(responseNative.balance)/1000000000000000000
          console.log(responseNative.toJSON());
          const test =responseNative.toJSON()
          const newBal = test.balance/1000000000000000000
          const finalBalance = newBal.toString()
          setTokenBalance(finalBalance.slice(0,6))
          
          console.log("test",test.balance);
          console.log("finalBalance",finalBalance);

          const responseTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain,
        });
      
      console.log(responseTransactions.toJSON());
          // console.log(checkBalance)
          const tryresults = responseTransactions.toJSON()
          setTokenTransactions(tryresults.result)
          
          setTotalTrans(tryresults.result.length) 


      }
     else{
        const chain = EvmChain.BSC;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address,
          chain,
        });
        setTokenList(response.toJSON())
        console.log(response.toJSON());
  
        const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
          address,
          chain,
        });
      
        console.log(responseTrans.toJSON());
        const tryresponseTrans = responseTrans.toJSON()
        setTokenTransfers(tryresponseTrans.result)
        
        setTotalTransfers(tryresponseTrans.result.length) 
        const responseNative = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
         setTokenBalance(responseNative.balance)
        //  const checkBalance = BigInt(responseNative.balance)/1000000000000000000
          console.log(responseNative.toJSON());
          const test =responseNative.toJSON()
          const newBal = test.balance/1000000000000000000
          const finalBalance = newBal.toString()
          setTokenBalance(finalBalance.slice(0,6))
          
          console.log("test",test.balance);
          console.log("finalBalance",finalBalance);

          const responseTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain,
        });
      
      console.log(responseTransactions.toJSON());
          // console.log(checkBalance)
          const tryresults = responseTransactions.toJSON()
          setTokenTransactions(tryresults.result)
          
          setTotalTrans(tryresults.result.length) 
      }
     
      
    

    
    }
    const runAppChange = async (change) => {
      if(!Moralis.Core.isStarted){
        await Moralis.start({apiKey: "8KIbgDapUnsH9w9YiNWnEND7zhFyZBZwTcd08MxjjxVkpCWnc38A8AgQI7wt7HvR",});
    }
      
      const address =currentAccount;
    
      if(change == "BNB"){
        const chain = EvmChain.BSC;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address,
          chain,
        });
        setTokenList(response.toJSON())
        console.log(response.toJSON());
  
        const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
          address,
          chain,
        });
      
        console.log(responseTrans.toJSON());
        const tryresponseTrans = responseTrans.toJSON()
        setTokenTransfers(tryresponseTrans.result)
        
        setTotalTransfers(tryresponseTrans.result.length) 
        const responseNative = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
         setTokenBalance(responseNative.balance)
        //  const checkBalance = BigInt(responseNative.balance)/1000000000000000000
          console.log(responseNative.toJSON());
          const test =responseNative.toJSON()
          const newBal = test.balance/1000000000000000000
          const finalBalance = newBal.toString()
          setTokenBalance(finalBalance.slice(0,6))
          
          console.log("test",test.balance);
          console.log("finalBalance",finalBalance);

          const responseTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain,
        });
      
      console.log(responseTransactions.toJSON());
          // console.log(checkBalance)
          const tryresults = responseTransactions.toJSON()
          setTokenTransactions(tryresults.result)
          
          setTotalTrans(tryresults.result.length) 
      }
      else if(change == "ETH"){
        console.log('value changed')
        const chain = EvmChain.ETHEREUM;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address,
          chain,
        });
        setTokenList(response.toJSON())
        console.log(response.toJSON());
  
        const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
          address,
          chain,
        });
      
        console.log(responseTrans.toJSON());
        const tryresponseTrans = responseTrans.toJSON()
        setTokenTransfers(tryresponseTrans.result)
        
        setTotalTransfers(tryresponseTrans.result.length) 
        const responseNative = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
         setTokenBalance(responseNative.balance)
        //  const checkBalance = BigInt(responseNative.balance)/1000000000000000000
          console.log(responseNative.toJSON());
          const test =responseNative.toJSON()
          const newBal = test.balance/1000000000000000000
          const finalBalance = newBal.toString()
          setTokenBalance(finalBalance.slice(0,6))
          
          console.log("test",test.balance);
          console.log("finalBalance",finalBalance);

          const responseTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain,
        });
      
      console.log(responseTransactions.toJSON());
          // console.log(checkBalance)
          const tryresults = responseTransactions.toJSON()
          setTokenTransactions(tryresults.result)
          
          setTotalTrans(tryresults.result.length) 
      }
     else{
        const chain = EvmChain.BSC;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address,
          chain,
        });
        setTokenList(response.toJSON())
        console.log(response.toJSON());
  
        const responseTrans = await Moralis.EvmApi.token.getWalletTokenTransfers({
          address,
          chain,
        });
      
        console.log(responseTrans.toJSON());
        const tryresponseTrans = responseTrans.toJSON()
        setTokenTransfers(tryresponseTrans.result)
        
        setTotalTransfers(tryresponseTrans.result.length) 
        const responseNative = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
         setTokenBalance(responseNative.balance)
        //  const checkBalance = BigInt(responseNative.balance)/1000000000000000000
          console.log(responseNative.toJSON());
          const test =responseNative.toJSON()
          const newBal = test.balance/1000000000000000000
          const finalBalance = newBal.toString()
          setTokenBalance(finalBalance.slice(0,6))
          
          console.log("test",test.balance);
          console.log("finalBalance",finalBalance);

          const responseTransactions = await Moralis.EvmApi.transaction.getWalletTransactions({
            address,
            chain,
        });
      
      console.log(responseTransactions.toJSON());
          // console.log(checkBalance)
          const tryresults = responseTransactions.toJSON()
          setTokenTransactions(tryresults.result)
          
          setTotalTrans(tryresults.result.length) 
      }
    

    
    }
  return (
    
     <div className={styles.wrapper}>

      <div className={styles.mainContainer}>
        <div className={styles.leftMain}>
            <div className={styles.portfolioAmountContainer}>
             {isConnected &&(
               <div className={styles.portfolioAmount}>{tokenBalance} {tokenChain}</div>
             )}
           
            </div>
        
            <div className={styles.tokenTablesHeaders}>
              <div className={styles.tokenTablesTitle}>Transactions</div>
         
            </div>
            {totalTransfers !=0 &&
            (
              <div className={styles.tableDiv}>
                <table class="table-auto">
                  <thead>
                    <tr>
                      <th className={styles.tableHead}>Txn Hash</th>
                      <th className={styles.tableHead}>Block</th>
                      <th className={styles.tableHead}>Timestamp</th>
                      <th className={styles.tableHead}>From</th>
                      <th className={styles.tableHead}>To</th>
                      <th className={styles.tableHead}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokensTransactions.slice(0, amountOfItems).map((trans)=>(
                        <tr>
                          <td className={styles.tableBody}>{(trans.block_hash).slice(0,17)}...</td>
                          <td className={styles.tableBody}>{trans.block_number}</td>
                          <td className={styles.tableBody}>{(trans.block_timestamp).replace("T", " ").slice(0,19)}</td>
                          <td className={styles.tableBody}>{(trans.from_address).slice(0,17)}...</td>
                          <td className={styles.tableBody}>{(trans.to_address).slice(0,17)}...</td>
                          <td className={styles.tableBody}>{parseFloat(trans.value/(Math.pow(10,18))).toFixed(5)}</td> 
                    
                        </tr>
                    ))}
                
                
                  </tbody>
                </table>
              </div>
          
            )
            }
            {totalTransfers ==0 && (
               <div className={styles.tokenTablesTitle}>No Transactions Found</div>
            )}
 
 <div className={styles.tokenTablesHeaders}>
              <div className={styles.tokenTablesTitle}>Token Transactions</div>
         
            </div>
            {totalTrans !=0 &&
            (
              <div className={styles.tableDiv}>
                <table class="table-auto">
                  <thead>
                    <tr className='border border-[#30363b]'>
                      <th className={styles.tableHead}>Txn Hash</th>
                      <th className={styles.tableHead}>Block</th>
                      <th className={styles.tableHead}>Timestamp</th>
                      <th className={styles.tableHead}>From</th>
                      <th className={styles.tableHead}>To</th>
                      <th className={styles.tableHead}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokensTransfers.slice(0, amountOfItems).map((trans)=>(
                        <tr>
                          <td className={styles.tableBody}>{(trans.transaction_hash).slice(0,17)}...</td>
                          <td className={styles.tableBody}>{trans.block_number}</td>
                          <td className={styles.tableBody}>{(trans.block_timestamp).replace("T", " ").slice(0,19)}</td>
                          <td className={styles.tableBody}>{(trans.from_address).slice(0,17)}...</td>
                          <td className={styles.tableBody}>{(trans.to_address).slice(0,17)}...</td>
                          <td className={styles.tableBody}>{parseFloat(trans.value/(Math.pow(10,18))).toFixed(5)}</td> 
                    
                        </tr>
                    ))}
                
                
                  </tbody>
                </table>
              </div>
            )
            }
            {totalTrans ==0 && (
               <div className={styles.tokenTablesTitle}>No Transactions Found</div>
            )}
 
         
         
          </div>
        <div className={styles.rightMain}>
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>
              Menu
            </div>
            <BiDotsHorizontalRounded className={styles.moreOptions}/>
          </div>
     
          {isConnected && (
          <>
            <div className={styles.menuItem} onClick={() => handleAuth()}>
            Logout
            </div>
            <div className={styles.menuItem}>Wallet Address: {formattedAccount}</div>
            <select
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    runAppChange(e.target.value);
                  }}
                >
                  <option value="BNB">Binance Smart Chain Mainnet</option>
                  <option value="ETH">Ethereum Mainnet</option>
           
                </select>
             
          </>
        )}

        {!isConnected && (
          <div className={styles.menuItem} onClick={() => handleAuth()} >
            Login
          </div>
        )}
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>
            Crypto Currencies Lists
            </div>
            <AiOutlinePlus className={styles.moreOptions}/>
          </div>
          {tokensList.slice(0, amountOfItems).map((items)=>(
            <div className={styles.buyingPowerContainer}>
              <div className={styles.buyingPowerTitle}>{items.symbol}:</div>
              <div className={styles.buyingPowerAmount}> {parseFloat(items.balance/(Math.pow(10,items.decimals))).toFixed(5)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crypto;
