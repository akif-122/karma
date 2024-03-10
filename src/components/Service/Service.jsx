import React from 'react'
import "./service.css"
import s1 from "../../assets/img/s1.png"
import s2 from "../../assets/img/s2.png"
import s3 from "../../assets/img/s3.png"
const Service = () => {

    const serviceCard = [
        {
            img: s1,
            heading: "Get Quality Leads",
            para: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."
        },

        {
            img: s2,
            heading: "Grow Your Traffic",
            para: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },

        {
            img: s3,
            heading: "Drive More Sales",
            para: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
    ]

    return (
        <>
            <section className='service'>
                <div className="container" >
                    <h2 data-aos="zoom-in">Keywords research. Content optimisation. Backlinks. Store monitoring.</h2>
                    <div className="row mt-5">
                        {
                            serviceCard.map((c, i) => (
                                <div className="col-md-6 col-lg-4 mb-3" data-aos="fade-up" key={i}>
                                    <div className="service-card">
                                        <img src={c.img} alt="" />

                                        <h5>{c.heading}</h5>
                                        <p>{c.para}</p>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Service