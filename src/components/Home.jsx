import React from 'react'
import Layout from './layout/Layout'

function Homes() {
  return (
    <div className='max-w-7xl mx-auto h-[100vh]'>
      <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:mx-6 p-2 bg-green-600'>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
        <div className='ring-2 bg-orange-500 ring-white min-w-fit min-h-[20vh]'></div>
      </div>
    </div>
  )
}

export function Home() {
  return (
    <Layout>
      <Homes />
    </Layout>
  )
}