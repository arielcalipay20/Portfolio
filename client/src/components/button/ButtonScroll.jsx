import React from 'react'
import { Link } from 'react-scroll'

const ButtonScroll = (props) => {
    return (
        //Component for all scroll button
        <div className='btn-container' data-aos="slide-right">
            <Link to={props.to} spy={true} offset={-60} smooth={true} duration={500}>
                <button className='btn' data-label={props.data}></button>
            </Link>
        </div>

    )
}

export default ButtonScroll

