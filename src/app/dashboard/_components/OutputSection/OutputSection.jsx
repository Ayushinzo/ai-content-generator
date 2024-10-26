'use client'
import React, { useEffect, useRef } from 'react'
import './OutputSection.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { MdOutlineContentCopy } from "react-icons/md";

function OutputSection({ aiContent }) {
  let editRef = useRef()
  useEffect(()=>{
      editRef.current.getInstance().setMarkdown(aiContent)
  }, [aiContent])
  function handleCopyText() {
     navigator.clipboard.writeText(editRef.current.getInstance().getMarkdown())
  }
  return (
    <div className='output-section'>
      <div className='copy'>
        <p>Output</p>
        <button onClick={handleCopyText}><MdOutlineContentCopy />Copy</button>
      </div>
      <Editor
        ref={editRef}
        height='600px'
        initialValue='Your result will be appeared here...'
      />
    </div>
  )
}

export default OutputSection