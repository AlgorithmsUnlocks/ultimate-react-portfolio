import React from 'react'
import './service.css'
import ServiceButton from './ServiceButton'
import ServiceContent from './ServiceContent'
import ServiceText from './ServiceText'

export const Service = () => {
  return (
    <>
    <div className='container-fluid service-bg' id='service-sec'>
     <div className='container'>
        <div className='service-me'>
            <ServiceText />
            <ServiceContent />
            <ServiceButton />
        </div>
     </div>
    </div>
    </>
  )
}
export default Service