import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <div>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Service/>
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
    </div>
  )
};
export default App;
