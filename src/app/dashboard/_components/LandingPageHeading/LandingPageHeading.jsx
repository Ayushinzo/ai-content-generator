import React from 'react'
import './LandingPageHeading.css'
import '../../../responsive.css'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

function LandingPageHeading() {
    return (
        <div className='LandingPageHeading'>
            <div className="heading-container">
                <h1>AI Content <span>Generator</span></h1>
                <p>Revolutionize your content creation with our AI powered app, Delivering enging and high-quality
                    text in a second
                </p>
                <div className="start-btn">
                    <Link href={'/dashboard'}><button>Get Started <FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPageHeading