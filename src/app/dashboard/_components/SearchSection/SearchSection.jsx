import React, { useEffect, useState } from 'react'
import './SearchSection.css'
import Templates from '../../../(data)/Templates'

function SearchSection({ setTemplate }) {
  const [inputSearch, setInputSearch] = useState()
  useEffect(()=>{
    let filterData = Templates.filter((item)=>{
      return item.name?.toLowerCase().includes(inputSearch?.toLowerCase())
    })
    if(inputSearch){
      setTemplate(filterData)
    }
    else{
      setTemplate(Templates)
    }
  }, [inputSearch])
  return (
    <div className='search-section'>
      <div className="search-template">
        <p>Browse all templates</p>
        <input onChange={(e)=>{setInputSearch(e.target.value)}} type="search" name='search' placeholder='Search...'/>
      </div>
    </div>
  )
}

export default SearchSection