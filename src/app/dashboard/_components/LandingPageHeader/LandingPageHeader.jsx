import React from 'react'
import './LandingPageHeader.css'
import '../../../responsive.css'
import Link from "next/link";
import Logo from '../../../public/logo.svg'
import Image from 'next/image';
import { CiUser } from "react-icons/ci";

function LandingPageHeader() {

  return (
    <header className='LandingPageHeader'>
      <Link href={'/'}>
        <Image src={Logo} width={100} height={20} />
      </Link>
      <Link href={'/dashboard'}>
        <div className="getStarted">
          <CiUser />
          <span>Get Started</span>
        </div>
      </Link>
    </header>
  )
}

export default LandingPageHeader
