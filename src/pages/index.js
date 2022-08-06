import Head from 'next/head'
import { Home } from '../components/index'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>ToDo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
