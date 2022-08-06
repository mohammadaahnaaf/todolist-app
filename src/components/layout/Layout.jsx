import React from 'react'
import { Header, Footer } from '../shared/index'

function Layout({ children }) {
    return (
        <div className='bg-white'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout