import React from 'react'
import "./business.css"
import bImg from "../../assets/img/businessImg.png"
import { FaCheck } from "react-icons/fa";

const Business = () => {
    const topic = [
        {
            heading: "For entrepreneurs",
            text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
            heading: "For startups",
            text: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam."
        },
        {
            heading: "For employees",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam."
        },

    ]

    return (
        <>
            <section className='business'>
                <div className="container">
                    <div className="section-heading text-center" data-aos="zoom-in">
                        <h2>We take care of your business</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="business-img mb-4">
                                <img src={bImg} width={"100%"} alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 ps-md-5">
                            <div className="business-topic" data-aos="fade-down">
                                {
                                    topic.map((item, i) => (
                                        <div className="topic" key={i}>
                                            <h5> <FaCheck /> {item.heading}</h5>
                                            <p>{item.text}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Business