import React from 'react'
import "./find.css"
import Button from '../Button/Button'

const Find = () => {
    return (
        <>
            <section className='find'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center" data-aos="fade-left">
                            <h2>Find out what we can do for you</h2>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>


                            <div className="find-btn">
                                <Button text="Get Started" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Find