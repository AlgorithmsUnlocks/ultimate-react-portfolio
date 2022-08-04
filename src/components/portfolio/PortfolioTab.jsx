import React,{useState} from 'react'
import './portfolio.css'
import PortfolioMenu from './PortfolioMenu'

export const PortfolioTab = () => {
  return (
    <>
      <h1 className="mt-5 text-center main-heading"> Gallery of Mine </h1>
            <hr/>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                     <button className="btn btn-primary" onClick={() => setItems(Menu)} >All </button>
                    <button  className="btn btn-primary" onClick={() => filterMenu('webdesign')}>Web Design</button>
                    <button className="btn btn-primary" onClick={() => filterMenu('wordpressweb')} >Wordpress Website</button>
                     <button className="btn btn-primary" onClick={() => filterMenu('reactweb')} >React Website </button>
                    <button className="btn btn-primary" onClick={() => filterMenu('desktopapp')} >Desktop Application</button>
                  
                </div>
            </div>


             {/* Our Menu Items List will come here  */}
            
             <div className="menu-items container-fluid mt-5">
                <div className='row'>
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                
                                items.map((elem) => {
                                    const { id, name, image, description, price, category } = elem;
                                    return (
                                        
                                         <div className="Item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                            <div className="row Item-inside">
                                            {/* only for image  */}
                                            <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src= {image} alt="menu-img" className='img-fluid' />  
                                            </div>
                                            
                                            {/* for the rest of the data  */}
                                            <div className="col-12 col-md-12 col-lg-8 ">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                <div className="menu-price-book">
                                                    <div className="price-book-divide d-flex justify-content-between align-items-center">
                                                        <h2>Price : {price}</h2>
                                                        <a href="#">
                                                            <button className="btn btn-primary">Order Now</button>
                                                        </a>
                                                    </div>
                                                    <p>*Prices may vary on selected date.</p>        

                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                      
                                    )
                            })
                    }
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
export default PortfolioTab
