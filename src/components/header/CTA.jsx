import React from 'react'
import ResumeRuman from '../../assets/Ruman_Resume.pdf'
import './header.css'

export const CTA = () => {
  return (
    <div className='cta'>
     <a className='btn download-btn' href={ResumeRuman} download>Download CV</a>
     <a className='btn btn-primary' href='#'>Lets Talk</a>
    </div>
  )
}
export default CTA
