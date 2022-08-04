import React from 'react'
import './testimonial.css'
import TestimonialCarosel from './TestimonialCarosel'
import TestimonialText from './TestimonialText'

export const Testimonial = () => {
  return (
    <>
    <div className='container-fluid testimonial-carosel'>
      <div className='container'>
            <TestimonialText />
            <TestimonialCarosel />
      </div>
    </div>
    
    </>
  )
}
export default Testimonial