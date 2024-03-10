import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Aos from 'aos'
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import { Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import BlogSection from './components/BlogSection/BlogSection';
import Plan from './components/Plan/Plan';
import Business from './components/Business/Business';
import Find from './components/Find/Find';
import Footer from './components/Footer/Footer';

const App = () => {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
      once: true,
      easing: "ease"
    })
  }, [])

  return (
    <>
      <Header />
      <div className='wrapper'>

        <main>
          <Hero />
          <Service />
          <BlogSection />
          <Plan />
          <Business />
          <Find />
        </main>

        <Footer />


      </div>
    </>
  )
}

export default App