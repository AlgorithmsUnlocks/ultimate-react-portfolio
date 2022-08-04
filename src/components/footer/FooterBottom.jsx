import React from 'react'
import './footer.css'

export const FooterBottom = () => {
  return (
    <>
    <div id='footerBottom'>
      <div className='footerBottomContent'>
         <p>
           &copy;{(new Date().getFullYear())} All Rights Reserved
         </p>
         <p>
           2022 Made with <i className="fa-solid fa-face-grin-hearts"></i> by Ruman Ahmed (WP &amp; Front-end Expert)
         </p>
      </div>
    </div>
    </>
  )
}
export default FooterBottom
