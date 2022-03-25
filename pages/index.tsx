import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header/>
      
      {/*Feed*/}
      <Feed/>
      
      {/*Modal*/}
      <Modal/>
    </div>
  )
}

export default Home
