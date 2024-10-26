import React from 'react'
import './TemplateList.css'
import Templates from '../../../(data)/Templates'
import Image from 'next/image'
import Link from 'next/link'

function TemplateList({ template }) {
  return (
    <div className='template-list'>
      {
        template.map((item) => {
          return <>
            <div key={item.name} className="template">
              <Link href={`dashboard/content/${item.slug}`}>
                <Image src={item.icon} width={60} height={60} alt={item.name}/>
                <div>{item.name}</div>
                <p>{item.desc}</p>
              </Link>
            </div>
          </>
        })
      }
    </div>
  )
}

export default TemplateList