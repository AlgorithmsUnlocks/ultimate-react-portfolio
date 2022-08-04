import React from 'react'
import './about.css'
import AboutPDF from '../../assets/About_Ruman.pdf'

export const AboutMeButton = () => {
  return (
    <>
        <div className="about-me-button text-center">
          <a href={AboutPDF} download className='btn btn-primary'> Read About Me</a>
        </div>
    </>
  )
}
export default AboutMeButton
