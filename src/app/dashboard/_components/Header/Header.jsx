// 'use client'
import React from 'react'
import './Header.css'
import '../../../responsive.css'
import { SignedIn, UserButton } from "@clerk/nextjs";
import { CiSearch } from "react-icons/ci";

async function Header() {

  return (
    <>
      <header className='header'>
        <div className="search-bar">
          <CiSearch className='search-icon'/>
          <input type="search" name='search' placeholder='Search here...' />
        </div>
        <div className="sign">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <hr />
    </>
  )
}

export default Header