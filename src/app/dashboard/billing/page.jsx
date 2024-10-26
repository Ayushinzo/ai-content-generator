// 'use client'
import React from 'react'
import './page.css'
import '../../responsive.css'
import { MdDone } from "react-icons/md";

function page() {
  return (
    <div className='billing-plan-container'>
      <div className="billing-plans">
        <h1>Upgrade With Monthly Plan</h1>
        <div className="plans-container">
          <div className="plan-one">
            <p className='heading'>Free</p>
            <p className='price'><span>0$</span>/month</p>
            <div className="features">
              <p><MdDone />10,000 words/month</p>
              <p><MdDone />50+ Content Templates</p>
              <p><MdDone />Unlimited Download & Copy</p>
              <p><MdDone />1 Month of History</p>
            </div>
            <button>Currently Active Plan</button>
          </div>

          <div className="plan-one">
            <p className='heading'>Monthly</p>
            <p className='price'><span>9.99$</span>/month</p>
            <div className="features">
              <p><MdDone />1,00,000 words/month</p>
              <p><MdDone />50+ Content Templates</p>
              <p><MdDone />Unlimited Download & Copy</p>
              <p><MdDone />1 Year of History</p>
            </div>
            <button className='get-started-btn'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
