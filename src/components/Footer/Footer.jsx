import React, { useState } from 'react'
import "./footer.css"
import logo from "../../assets/img/logo-light.png";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
const Footer = () => {
    const [val, setVal] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!val) {
            alert("Please Enter Your email")
        } else {
            alert("Thanks")
            setVal("")
        }
    }

    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6" data-aos="fade-right">
                            <div className="ft-content">
                                <img src={logo} alt="" />
                                <p>2307 Beverley Rd, New York</p>
                                <p><Link>+ (0712) 819 79 555</Link></p>
                                <p>
                                    <Link>office@finance.com</Link>
                                </p>

                                <div className="d-flex gap-3 social-link" data-aos="fade-down">
                                    <Link>
                                        <FaInstagram />
                                    </Link>

                                    <Link>
                                        <FaFacebookF />
                                    </Link>
                                    <Link>
                                        <FaTwitter />
                                    </Link>
                                    <Link>
                                        <FaYoutube />
                                    </Link>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg col-md-4 col-sm-6" data-aos="fade-up">
                            <div className="ft-content">
                                <h6>Company</h6>
                                <ul className='navbar-nav'>
                                    <li>
                                        <Link>Mission</Link>
                                    </li>

                                    <li>
                                        <Link>About Us</Link>
                                    </li>

                                    <li>
                                        <Link>Why Choose Us</Link>
                                    </li>

                                    <li>
                                        <Link>Team</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className="col-lg col-md-4 col-sm-6" data-aos="fade-left">
                            <div className="ft-content">
                                <h6>Services</h6>
                                <ul className='navbar-nav'>
                                    <li>
                                        <Link>Pricing</Link>
                                    </li>

                                    <li>
                                        <Link>Awards</Link>
                                    </li>

                                    <li>
                                        <Link>Services</Link>
                                    </li>

                                    <li>
                                        <Link>Testimonials</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className="col-lg col-md-4 col-sm-6" data-aos="zoom-out">
                            <div className="ft-content">
                                <h6>Resources</h6>
                                <ul className='navbar-nav'>
                                    <li>
                                        <Link>Contacts</Link>
                                    </li>

                                    <li>
                                        <Link>Blog</Link>
                                    </li>

                                    <li>
                                        <Link>F.A.Q.</Link>
                                    </li>

                                    <li>
                                        <Link>Get a Quote</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-sm-6" data-aos="fade-left">
                            <div className="ft-content">
                                <h6>Subscribe</h6>

                                <div className="newsLetter">
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="email" value={val} onChange={(e) => setVal(e.target.value)} placeholder='Your Email' className='form-control' />
                                            <div className="ft-btn">
                                                <button type='submit' className="m-btn">Get Started</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer