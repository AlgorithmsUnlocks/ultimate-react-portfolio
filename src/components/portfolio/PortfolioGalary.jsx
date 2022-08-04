import React, {useState} from 'react'
import './portfolio.css'
import PortfolioMenu from './PortfolioMenu'

export const PortfolioGalary = () => {
    const [items, setItems] = useState(PortfolioMenu);
    
    const filterItem = (categItem) => {
        const updatedItems = PortfolioMenu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
  return (
     <>
        <h1 className="mt-5 text-center main-heading heading-title">Gallery of Mine</h1>
    
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">

                    <button className="btn btn-primary" onClick={() => setItems(PortfolioMenu)}>All</button>
                    <button className="btn btn-primary" onClick={() => filterItem('webdesign')}>Web Design</button>
                    <button className="btn btn-primary" onClick={() => filterItem('wordpressweb')}>Wordpress Website</button>
                    <button className="btn btn-primary" onClick={() => filterItem('reactweb')}>React Website</button>
                    <button className="btn btn-primary" onClick={() => filterItem('desktopapp')}>Desktop Application</button>
                     
                </div>
            </div>


             {/* my main items section  */}
             <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                    
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                                            <div className="row Item-inside">
                                                {/* for images */}
                                                <div className="col-12 col-md-12 col-lg-6 img-div">
                                                    <img src={image} alt={name} className="img-fluid"/>
                                                </div>

                                                {/* menu items description */}
                                                <div className="col-12 col-md-12 col-lg-6">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description }</p>
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
export default PortfolioGalary
