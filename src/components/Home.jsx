import React from 'react'
import Layout from './layout/Layout'

function Homes() {
  return (
    <div className='h-[100vh]'>Home</div>
  )
}

export function Home() {
  return (
    <Layout>
      <Homes />
    </Layout>
  )
}