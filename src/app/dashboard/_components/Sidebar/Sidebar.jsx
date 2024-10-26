'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import './Sidebar.css'
import Logo from '../../../public/logo.svg'
import { AiOutlineHome } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import { GrMenu } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";

function Sidebar() {
  const [totalCount, setTotalCount] = useState(0)
  let { user } = useUser()
  const [menu, setMenu] = useState(false)

  function wordsLen(str) {
    const array = str.trim().split(/\s+/);
    return array.length;
  }

  function handleMenu(){
    setMenu(true)
  }

  function handleCancle(){
    setMenu(false)
  }

  useEffect(() => {
    async function fetchUsageData() {
      try {
        await axios.post('http://localhost:3000/api/fetch', {
          query: user?.primaryEmailAddress?.emailAddress
        }, { headers: { "Content-Type": "application/json" } })

          .then((res) => {
            let r = 0
            res.data.data.forEach((item) => {
              r = r + wordsLen(item.aiContent)
            })
            setTotalCount(r)
          })

          .catch((err) => {
            console.log(err)
          })
      }
      catch (err) {
        console.log(err)
      }
    }

    fetchUsageData()
  }, [user])

  const menulist = [
    {
      name: "Home",
      icon: AiOutlineHome,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FaHistory,
      path: "/dashboard/history"
    },
    {
      name: "Billing",
      icon: CiMoneyBill,
      path: "/dashboard/billing"
    },
    {
      name: "Setting",
      icon: IoSettingsOutline,
      path: "/dashboard/setting"
    }
  ]

  const path = usePathname()
  return (
    <>
    <GrMenu className={`gr-menu ${menu && 'active'}`} onClick={handleMenu}/>
      <div className={`side-bar ${menu && 'active'}`} onClick={handleCancle}>
        <div className="image">
          <Link href={'/'}><Image src={Logo} alt='Logo'/></Link>
          <ImCancelCircle className='ImCancelCircle'/>
        </div>
        <hr/>
        <div className="menu-list">
          {
            menulist.map((item) => {
              return (
                <Link href={item.path}>
                  <div key={item.name} className={`menu-items ${path == item.path && 'active'}`}>
                    <item.icon className='icon' />
                    <p>{item.name}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className="credit-container">
          <div className="usage-credit">
            <h2>Credits</h2>
            <div className='sidebar'>
              <div style={{ width: (totalCount / 10000) * 100 + "%" }} className='nested-sidebar'></div>
            </div>
            <p>{totalCount}/10,000 credit used</p>
          </div>
          <button><Link href={'/dashboard/billing'}>Upgrade</Link></button>
        </div>
      </div>
    </>
  )
}

export default Sidebar