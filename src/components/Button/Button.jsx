import React from 'react'
import "./button.css"
const Button = ({ text }) => {
    return (
        <>
            <button className='m-btn'>{text}</button>
        </>
    )
}

export default Button