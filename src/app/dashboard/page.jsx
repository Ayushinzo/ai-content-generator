'use client'
import React, { useEffect, useState } from 'react'
import SearchSection from './_components/SearchSection/SearchSection'
import TemplateList from './_components/TemplateList/TemplateList.jsx'
import '../responsive.css'

function page() {
  const [template, setTemplate] = useState([])
  return (
    <React.Fragment>
      <SearchSection setTemplate={setTemplate}/>
      <TemplateList template={template}/>
    </React.Fragment>
  )
}

export default page