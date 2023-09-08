import React from 'react';
import Logo from '../../assets/img/personal_logo1.png';

const LogoComponent = () => {
    return (
        //Component for logo
        <div className='logo-container'>
            <img src={Logo} alt='Logo' />
        </div>

    );
}

export default LogoComponent;
