import React from "react";
import WordpressDesign from "../../assets/wordpress-design.jpg";
import EcommerceDevelopment from '../../assets/ecommerce-development.webp'
import WordpressDevelopment from '../../assets/wordpress-development.jpg'
import ChildTheme from '../../assets/child-theme.jpg'
import FontEnd from '../../assets/front-end.webp'
import LMS from '../../assets/lms.jpg'

export const ServiceContent = () => {
  return (
    <>
      <div className="service-me-content">
        <div className="row">
          <div className="col-md-4">
            <div className="service-me-content-details">                          
                <div className="service-me-inner-content">
                 
                  <img srcSet={WordpressDesign}></img>
                  <h5 className="text-center">WordPress Design</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quam consectetur blanditiis molestiae quasi quis natus
                    quos ex sint cumque!
                  </p>
                  <div className="service-content-btn-more text-center">
                    <a href='' className='btn download-btn text-center'> Read More</a>
                  </div>
                </div>           
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-me-content-details">                          
                <div className="service-me-inner-content">
                   
                  <img srcSet={WordpressDevelopment}></img>
                  <h5 className="text-center">WordPress Development</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quam consectetur blanditiis molestiae quasi quis natus
                    quos ex sint cumque!
                  </p>
                  <div className="service-content-btn-more text-center">
                    <a href='' className='btn download-btn text-center'> Read More</a>
                  </div>
                </div>           
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-me-content-details">                          
                <div className="service-me-inner-content">
                
                  <img srcSet={EcommerceDevelopment}></img>
                  <h5 className="text-center">Ecommerce Development</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quam consectetur blanditiis molestiae quasi quis natus
                    quos ex sint cumque!
                  </p>
                  <div className="service-content-btn-more text-center">
                    <a href='' className='btn download-btn text-center'> Read More</a>
                  </div>
                </div>           
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-me-content-details">                          
                <div className="service-me-inner-content">
               
                  <img srcSet={ChildTheme}></img>
                  <h5 className="text-center">Child Theme Development</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quam consectetur blanditiis molestiae quasi quis natus
                    quos ex sint cumque!
                  </p>
                  <div className="service-content-btn-more text-center">
                    <a href='' className='btn download-btn text-center'> Read More</a>
                  </div>
                </div>           
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-me-content-details">                          
                <div className="service-me-inner-content">
                 
                  <img srcSet={FontEnd}></img>
                  <h5 className="text-center">Front-end Development</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quam consectetur blanditiis molestiae quasi quis natus
                    quos ex sint cumque!
                  </p>
                  <div className="service-content-btn-more text-center">
                    <a href='' className='btn download-btn text-center'> Read More</a>
                  </div>
                </div>           
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-me-content-details">                          
                <div className="service-me-inner-content">
                 
                  <img srcSet={LMS}></img>
                  <h5 className="text-center">LMS Development</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quam consectetur blanditiis molestiae quasi quis natus
                    quos ex sint cumque!
                  </p>
                  <div className="service-content-btn-more text-center">
                    <a href='' className='btn download-btn text-center'> Read More</a>
                  </div>
                </div>           
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default ServiceContent;
