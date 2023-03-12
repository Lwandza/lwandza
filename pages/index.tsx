//Dependencies
// import axios from 'axios'
import  React, { useState, useContext } from 'react'

//Components

import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

// import PortfolioChart from '../components/PortfolioChart'

import { WalletContext } from '@/context/WalletContext'
//Icons
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'


export default function Home() {
  const {
    handleAuth,
    isConnected,coinSelect,formattedAccount}
    =useContext(WalletContext)
  return (
    <div>
    <Head>
      <title>Lwandza Nzalo | Full Stack Developer</title>
      <meta name="description" content="I’m a full stack developer with over Five years' experience using React, Ionic, Angular, Typescript, Python, Firebase, JavaScript, HTML, CSS, web3..." />
      <link rel="icon" href="/fav.png" />
    </Head>
  <Main />
  <About />
  <Skills />
  <Projects />
  <Contact />
  </div>
  )
}
