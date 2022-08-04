import React from "react";
import "./testimonial.css";
import Client1 from "../../assets/TanyaCox.jpg"
import Client2 from "../../assets/IsabelleHolmes.jpg"
import Client3 from "../../assets/SrYagoGarrido.jpg"

export const TestimonialCarosel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">

            <div className="row">

                <div className="col-md-4 reviews-image">
                        <img
                    srcSet={Client1}
                    className="d-block w-70 carosel-image" alt="First Slide"></img>
                </div>  
                <div className="col-md-8 reviews-text">
                       <h3>Tanya Cox</h3>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star-half"></i> 4.5
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptatibus optio quidem ipsum nesciunt consequatur. Id ea
                        temporibus eligendi beatae magnam laudantium, quam nisi commodi
                        ipsam magni laboriosam assumenda optio cupiditate nobis ab quo
                        maxime. Voluptates asperiores fugit praesentium doloribus
                        reiciendis cupiditate aut minus enim esse error! Rerum repudiandae
                        harum cupiditate.
                        </p>
                </div> 
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">

                <div className="col-md-4 reviews-image">
                        <img
                    srcSet={Client2}
                    className="d-block w-70 carosel-image" alt="First Slide"></img>
                </div>  
                <div className="col-md-8 reviews-text">
                       <h3>Isabelle Holmes</h3>
                       <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                       <i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half"></i> 4.7
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptatibus optio quidem ipsum nesciunt consequatur. Id ea
                        temporibus eligendi beatae magnam laudantium, quam nisi commodi
                        ipsam magni laboriosam assumenda optio cupiditate nobis ab quo
                        maxime. Voluptates asperiores fugit praesentium doloribus
                        reiciendis cupiditate aut minus enim esse error! Rerum repudiandae
                        harum cupiditate.
                        </p>
                </div> 
                </div>
          </div>

          <div className="carousel-item">
            <div className="row">

                <div className="col-md-4 reviews-image">
                        <img
                    srcSet={Client3}
                    className="d-block w-70 carosel-image" alt="First Slide"></img>
                </div>  
                <div className="col-md-8 reviews-text">
                        <h3>Sr. Yago Garrido</h3>
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> 5.0
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptatibus optio quidem ipsum nesciunt consequatur. Id ea
                        temporibus eligendi beatae magnam laudantium, quam nisi commodi
                        ipsam magni laboriosam assumenda optio cupiditate nobis ab quo
                        maxime. Voluptates asperiores fugit praesentium doloribus
                        reiciendis cupiditate aut minus enim esse error! Rerum repudiandae
                        harum cupiditate.
                        </p>
                </div> 
                </div>
          </div>
          
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default TestimonialCarosel;
