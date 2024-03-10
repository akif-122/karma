import React from 'react'
import "./plan.css"
import PlanCard from '../PlanCard/PlanCard'
const Plan = () => {

    const starter = {
        class: "starter",
        name: "Starter Plan",
        price: 10,
        subHeading: "14-day money back guarantee",
        list: ["Own Analytics Platform", "SEO Audit", "Speed Optimisation", "SEO Optimisation"]

    }

    const premium = {
        class: "premium",
        name: "Premium Plan",
        price: 30,
        subHeading: "14-day money back guarantee",
        list: ["Own Analytics Platform", "SEO Audit", "Speed Optimisation", "SEO Optimisation"]

    }

    return (
        <>
            <section className='plan'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="plan-heading text-center text-lg-start mb-5 mb-lg-0" data-aos="zoom-in">
                                <h2>Choose Your Plan</h2>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia sed ut perspiciatis. Nam libero tempore, cum soluta nobis est eligendi optio cumque.</p>
                                <a href="#" className='sec-link'>Click for more</a>

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row align-items-center g-0">
                                <div className="col-md-6" data-aos="fade-down">
                                    <PlanCard cardData={starter} />
                                </div>
                                <div className="col-md-6" data-aos="fade-up">
                                    <PlanCard cardData={premium} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Plan