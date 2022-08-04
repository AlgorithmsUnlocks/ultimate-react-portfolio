import React from 'react'
import './experience.css'
import { ExperienceText } from './ExperienceText'
import ProgressBar from './ProgressBar'

export const Experience = () => {
  return (
   <>
   <div className='container-fluid experience-bg' id='skill-sheet'> 
    <div className='container'>
      <ExperienceText />
      <ProgressBar/>
    </div>
   </div>
   </>
  )
}
export default Experience
