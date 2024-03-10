import React, { useState } from 'react'

import "./header.css"
import { FaBarsStaggered, FaAngleDown } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"
import logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
const Header = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <header className='header'>
                <div className="container-fluid">
                    <nav className='navbar navbar-expand-lg py-4 py-lg-0'>
                        <Link href="#" data-aos="fade-right">
                            <img src={logo} alt="" />
                        </Link>

                        <button className='toggler d-block d-lg-none' data-aos="fade-left" onClick={handleNav}>
                            {
                                nav ? <IoMdClose /> : <FaBarsStaggered />
                            }

                        </button>

                        <div className="collapse navbar-collapse" data-aos="zoom-in" id='nav'>
                            <ul className='navbar-nav ms-auto'>
                                <li>
                                    <Link className='nav-link' to="/">Home</Link>
                                </li>

                                <li className='dropWrap'>
                                    <Link className='nav-link' to="/">Pages <FaAngleDown /></Link>

                                    <div className="dropMenu">
                                        <ul>
                                            <li>
                                                <Link>About Us</Link>
                                            </li>

                                            <li>
                                                <Link>Services</Link>
                                            </li>

                                            <li>
                                                <Link>Pricing</Link>
                                            </li>

                                            <li>
                                                <Link>Team</Link>
                                            </li>

                                        </ul>
                                    </div>

                                </li>

                                <li className='dropWrap'>
                                    <Link className='nav-link' to="/">Pages <FaAngleDown /></Link>

                                    <div className="dropMenu">
                                        <ul>

                                            <li>
                                                <Link>Page 1</Link>
                                            </li>

                                            <li>
                                                <Link>Page 2</Link>
                                            </li>

                                            <li>
                                                <Link>Page 3</Link>
                                            </li>




                                        </ul>
                                    </div>

                                </li>

                                <li className='dropWrap'>
                                    <Link className='nav-link' to="/">Projects <FaAngleDown /></Link>

                                    <div className="dropMenu">
                                        <ul>
                                            <li>
                                                <Link>Project 1</Link>
                                            </li>

                                            <li>
                                                <Link>Project 2</Link>
                                            </li>

                                            <li>
                                                <Link>Project 3</Link>
                                            </li>

                                            <li>
                                                <Link>Project 4</Link>
                                            </li>
                                        </ul>
                                    </div>

                                </li>

                                <li>
                                    <Link>Blog</Link>
                                </li>
                                <li>
                                    <Link>Contact</Link>
                                </li>

                                <li>
                                    <Button text="Get Started" />
                                </li>

                            </ul>
                        </div>

                    </nav>

                    {/* MOBILE NAV START */}
                    <div className={`mNav d-block d-lg-none ${nav ? "active" : ""}`} id='mNav'>
                        <div className="d-flex align-items-center justify-content-between mNav-top">
                            <p>Menu</p>
                            <button className='m-close' onClick={handleNav}>
                                <IoMdClose />
                            </button>
                        </div>

                        <ul className='navbar-nav'>
                            <li>
                                <Link>Home</Link>
                            </li>

                            <li>
                                <Link>Pages</Link>
                            </li>

                            <li>
                                <Link>Projects</Link>
                            </li>

                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>

                        </ul>


                    </div>
                    {/* MOBILE NAV END */}




                </div>
            </header>
        </>
    )
}

export default Header