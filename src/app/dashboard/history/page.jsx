'use client'
import React, { useEffect, useState } from 'react'
import './page.css'
import '../../responsive.css'
import HistoryCard from '../_components/HistoryCard/HistoryCard.jsx'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'

function page(){
  const [data, setData] = useState([])
  const [reload, setReload] = useState(true)
  let { user } = useUser()
  useEffect(() => {
    async function fetchData() {
      try {
        let r = await axios.post('/api/fetch', {
          query: user?.primaryEmailAddress?.emailAddress
        }, { headers: { "Content-Type": "application/json"} })

          .then(function(res){
            setData(res.data.data)
          })

          .catch((err) => {
            console.log(err)
          })
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [user, reload])
  return (
    <div className='history'>
      <h1>History</h1>
      <p>Search your previously generated AI content</p>
      {data == undefined?
      <div className="norecord-container">
        <div className='noRecord'>No record yet</div>
      </div> : 
      <div className="history-container">
        {
          data.map((item) => {
            return <>
              <HistoryCard setReload={setReload} formData={item.formData} templateSlug={item.templateSlug} _id={item._id} aiContent={item.aiContent} createdAt={item.createdAt} />
            </>
          })
        }
      </div>}
    </div>
  )
}

export default page