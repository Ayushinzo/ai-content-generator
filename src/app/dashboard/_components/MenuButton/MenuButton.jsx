'use client'
import React, { useEffect, useState } from 'react'
import './MenuButton.css'
import { AiOutlineMenu } from "react-icons/ai";

function MenuButton({sidebar}) {
  return (
    <div className="menu">
        <AiOutlineMenu className='menu-icon' />
    </div>
  )
}

export default MenuButton