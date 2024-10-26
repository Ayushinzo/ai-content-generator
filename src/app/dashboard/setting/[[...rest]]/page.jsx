'use client'
import React from 'react'
import './page.css'
import { UserProfile } from '@clerk/nextjs'

function page() {
  return (
    <div className='user-profile'>
      <UserProfile/>
    </div>
  )
}

export default page
