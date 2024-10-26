'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import './FormSection.css'
import { RxReload } from "react-icons/rx";

function FormSection({ selectedTemplate, generateAIContent, loading }) {
  const [formData, setFormData] = useState()
  function handleChange(e){
    let {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  function handleSubmit(e){
    e.preventDefault()
    generateAIContent(formData)
  }
  return (
    <div className='form-section'>
      <Image src={selectedTemplate.icon} alt='icon' width={65} height={20} />
      <h1>{selectedTemplate.name}</h1>
      <p>{selectedTemplate.desc}</p>
      <div className='form-container'>
        <form action="" method="get" onSubmit={handleSubmit}>
          {
            selectedTemplate.form.map((item) => {
              return (
                <>
                  <p>{item.label}</p>
                  {
                    item.field == 'input' ? <input onChange={handleChange} type={item.field} name={item.name} required /> : item.field == 'textarea' ? <textarea onChange={handleChange} name={item.name}></textarea> : null
                  }
                </>
              )
            })
          }
          <br />
          <button type='submit' disabled={loading} className={loading && 'disabled'}>{loading ? <RxReload className='myLoad'/> : null} Generate Content</button>
        </form>
      </div>
    </div>
  )
}

export default FormSection