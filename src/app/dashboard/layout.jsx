'use client'
import React, { useEffect, useMemo } from 'react'
import './page.css'
import Sidebar from './_components/Sidebar/Sidebar'
import Header from './_components/Header/Header'
import '../responsive.css'
import connectDB from '../utils/database/connect'

function layout({ children }) {
  
  useMemo(()=>{
    connectDB()
  }, [])

  return (
    <div>
      <Sidebar />
      <div className='content'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default layout