import React, { useState, useContext } from 'react'
import './HistoryCard.css'
import Image from 'next/image'
import Templates from '../../../(data)/Templates'
import axios from 'axios'

function HistoryCard({ setReload, templateSlug, _id, aiContent, formData, createdAt }) {
    let selectTemp = Templates.find(i => i.slug == templateSlug)
    function wordsLen(str) {
        const array = str.trim().split(/\s+/);
        return array.length;
    }

    async function handleDelete(_id) {
        let res = confirm("Do you really want to delete it?")

        if (res) {
            try {
                await axios.post("/api/delete", {
                    id: _id
                }, { headers: { "Content-Type": "application/json" } })

                setReload(prev => !prev)
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    function handleCopy(aiContent){
        navigator.clipboard.writeText(aiContent)
    }
    return (
        <div className='history-card' key={_id}>
            {/* <Link href={`content/${templateSlug}`}> */}
            <div className="card-title">
                <div className="ab">
                    <Image src={selectTemp.icon} width={30} height={30} />
                    <p>{selectTemp.name}</p>
                </div>
                {/* <div className="delete-icon">
                    <MdDelete onClick={() => handleDelete(_id)} className='delete' />
                </div> */}
            </div>
            <p className="ai-content">
                {aiContent.slice(0, 130) + '...'}
            </p>
            <hr className='hr' />
            <div className="bot">
                <p>Words: {wordsLen(aiContent)}</p>
                <p>{createdAt.slice(0, 10)}</p>
            </div>
            <div className="copy-btn">
                <button className='link' onClick={() => handleCopy(aiContent)}><b>Copy</b></button>
                <button onClick={() => handleDelete(_id)} className='link delete'><b>Delete</b></button>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default HistoryCard