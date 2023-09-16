import React from 'react'

//Title Component
const Title = (props) => {

    return (
        <div className='title-section'>
            <h1 data-aos="fade-down">{props.title}</h1>
        </div>
    )

}

export default Title
