'use client'

import React from 'react'
import DsaDetails from '@/app/components/DsaDetail'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
const page = () => {
  return (
    <div>
        <Navbar/>
        <DsaDetails/>
        <Footer/>
    </div>
  )
}

export default page