import React, { useEffect } from 'react';
import CV from '../../../assets/pdf/CALIPAY_ARIEL_CV.pdf';
// import Profile from '../img/avatar.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../button/ButtonLink';

//Home Layout Component
const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (

        <div className='home-container' id='home'>

            <div className='overlay'>

                <div className='home-flex-container'>

                    <div className='description-container'>

                        <p className='header-txt' data-aos="flip-up">Welcome To My Portfolio</p>
                        <h1 data-aos="fade-up">Hi! I'm Ariel&#44;</h1>
                        <div className='role-container' data-aos="fade-up">
                            <h1 className='role-animated' data-text="Web Developer">Web Developer</h1>
                        </div>
                        <p className='description-txt' data-aos="fade-up">I am a dynamic developer skilled in HTML, CSS, JS, Bootstrap, React.js and with fundamental knowledge in React Native, MongoDB, Node.js, and Express.js. My journey began with creating eye-catching web interfaces using HTML and CSS, then mastering JS for interactivity. Utilizing Bootstrap, I designed adaptive layouts, while React.js empowered me to create energetic single-page applications.</p>

                        <Button href={CV} download={'CV'} data={'Download CV'} />

                    </div>

                    <div className="profile-container" data-aos='zoom-in'>
                        <div className="box">
                            <div className="spin-container">
                                <div className="shape">
                                    <div className="bd">
                                        {/* <img src={Profile} alt="Profile" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Home
