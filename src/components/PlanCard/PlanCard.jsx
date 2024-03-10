import React from 'react'
import "./planCard.css"
import { BsFillCheckCircleFill } from "react-icons/bs"
import Button from '../Button/Button'
const PlanCard = ({ cardData }) => {
    return (
        <>
            <div className={`planCard ${cardData.class}`}>
                <div className="planCard-Header">
                    <h5 className='text-center'>{cardData.name}</h5>
                </div>
                <div className="planCard-body">
                    <h2 className='text-center'>${cardData.price}<span>/month</span></h2>


                    <p ><BsFillCheckCircleFill /> {cardData.subHeading}</p>
                    <div className="card-list">
                        {
                            cardData.list?.map((item, i) => (
                                <p key={i}>{item}</p>

                            ))
                        }

                    </div>

                    <div className="card-btn text-center">
                        <Button text="Buy Plan" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default PlanCard