import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RouteData } from '../data/NavData';
import Logo from '../../assets/img/personal_logo1.png'
import List from '../Icon/List';
import CV from '../../assets/pdf/CALIPAY_ARIEL_CV.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

//NavBar Component
const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const getClicked = () => {
        setClicked(true);
    }

    const unClicked = () => {
        setClicked(false);
    }

    return (

        <header>
            <div className='navbar-container'>

                <div className='logo-container'>
                    <img src={Logo} alt='Logo' />
                </div>

                <FontAwesomeIcon className='bars' icon={faBars} onClick={getClicked} />

                <div className={`side-bar-container`} id={clicked ? 'visible' : ''}>
                    <FontAwesomeIcon className='x-mark' icon={faXmark} onClick={unClicked} />
                    <ul>
                        {RouteData.map((val, key) => {
                            //Component for all scroll link
                            return (
                                <li key={key}>
                                    <Link to={val.id} spy={true} smooth={true} offset={-60} duration={500} onClick={unClicked}>
                                        {val.Title}
                                    </Link>
                                </li>
                            )

                        })}
                    </ul>


                    <div className='clickable-container'>

                        <List />
                        <div className='btn-container'>
                            <a href={CV} download='CV' target='_blank' rel='noreferrer'>
                                <button className='btn'>Download CV</button>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </header >

    )

}

export default NavBar
