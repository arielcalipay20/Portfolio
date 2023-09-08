import React from 'react'

const Button = (props) => {
    return (
        //Components for all links button
        <div className='btn-container' data-aos="slide-right">
            <a href={props.href} download={props.download} target='_blank' rel='noreferrer'>
                <button className='btn' data-label={props.data}></button>
            </a>
        </div>

    )
}

export default Button

