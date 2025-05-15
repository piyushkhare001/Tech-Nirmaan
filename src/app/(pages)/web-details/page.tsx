'use client'

import React from 'react'
import WebDetails from '@/app/components/WebDetail'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'


const page = () => {
  return (
    <div>
        <Navbar/>
        <WebDetails />
        
        
        <Footer />
    </div>
  )
}

export default page