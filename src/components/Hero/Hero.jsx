import Button from '../Button/Button'
import React from 'react'
import "./hero.css"
import heroImg from "../../assets/img/hero.png"
import img1 from "../../assets/img/hero1.png"
import img2 from "../../assets/img/hero2.png"
import img3 from "../../assets/img/hero3.png"
const Hero = () => {
    return (
        <>
            <div className="hero-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6 mb-5">
                            <div className="hero-content" data-aos="fade-right">
                                <h1>Powering the digital business simply</h1>
                                <p>We provides you with user management functionality that results in faster development, faster revenue, more users.</p>

                                <div className="hero-btn">
                                    <Button text="Get Started" />
                                </div>

                                <p>Companies that trust us.</p>

                                <div data-aos="fade-up" className="d-flex flex-wrap justify-content-between align-content-center hero-images ">
                                    <img src={img1} alt="" />
                                    <img src={img2} alt="" />
                                    <img src={img3} alt="" />
                                </div>


                            </div>


                        </div>

                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="hero-img">
                                <img src={heroImg} width={"100%"} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero