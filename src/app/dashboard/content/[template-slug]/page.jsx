'use client'
import React, { useState } from 'react'
import './page.css'
import '../../../responsive.css'
import FormSection from '../../_components/FormSection/FormSection.jsx'
import OutputSection from '../../_components/OutputSection/OutputSection.jsx'
import Templates from '../../../(data)/Templates'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'
import chatSession from '../../../utils/AiModel.jsx'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

function page({ params }) {
  let selectedTemplate = Templates.find(item => item.slug == params['template-slug'])
  const [loading, setLoading] = useState(false)
  const [aiContent, setAiContent] = useState('')
  const { user } = useUser()

  async function generateAIContent(formData) {
    setLoading(true)
    let selectedPrompt = selectedTemplate?.aiPrompt
    let finalData = JSON.stringify(formData) + ',' + selectedPrompt
    const result = await chatSession.sendMessage(finalData);
    setAiContent(result.response.text())
    console.log(typeof result.response.text())
    console.log(typeof JSON.stringify(formData))
    await storeInDB(JSON.stringify(formData), result.response.text())
    setLoading(false)
  }

  async function storeInDB(formData, resText) {
    let res = await axios.post('/api/insert', {
      myFormData: formData,
      aiContent: resText,
      emailId: user?.primaryEmailAddress?.emailAddress,
      templateSlug: selectedTemplate.slug
    }, { headers: { "Content-Type": "application/json" } })
  }

  return (
    <>
      <button className='btn'><Link href={'/dashboard'}><FaArrowLeft />Back</Link></button>
      <div className='content-container'>
        <FormSection loading={loading} selectedTemplate={selectedTemplate} generateAIContent={generateAIContent} />
        <OutputSection aiContent={aiContent} />
      </div>
    </>
  )
}

export default page