import React from 'react'
import './Cards.css'
import '../../../responsive.css'
import { CgTemplate } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import Link from 'next/link';

function Cards() {
  return (
    <div className='cards-container'>
      <div className="sub-card-container">
        <div className="card">
          <CgTemplate className='card-icon'/>
          <h2>25+ templates</h2>
          <p>Responsive, and mobile first project on the web</p>
          <Link href={'/dashboard'}>Learn more <FaAngleRight /></Link>
        </div>
        <div className="card">
          <MdOutlineDashboardCustomize className='card-icon'/>
          <h2>Customizable</h2>
          <p>Components are easily customized and extendable</p>
          <Link href={'/dashboard'}>Learn more <FaAngleRight /></Link>
        </div>
        <div className="card">
          <FaFreeCodeCamp className='card-icon'/>
          <h2>Free to use</h2>
          <p>Every component and plugin is well documented</p>
          <Link href={'/dashboard'}>Learn more <FaAngleRight /></Link>
        </div>
        <div className="card">
          <LuMessagesSquare className='card-icon'/>
          <h2>24/7 Support</h2>
          <p>Contact us 24 hours a day, 7 days a week</p>
          <Link href={'/dashboard'}>Learn more <FaAngleRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
