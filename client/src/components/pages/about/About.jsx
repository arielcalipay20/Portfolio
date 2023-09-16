import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ButtonScroll from '../../button/ButtonScroll';
import Title from '../../title/Title';

//About Layout Component
const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className='about-container' id='about'>

      <div className='about-container-overlay'></div>

      <Title title={'ABOUT'} />

      <div className='about-container-flex'>

        <div className='gip-container' data-aos='zoom-in'>

          <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" frameBorder="0" title='developer' className="gip-iframe" allowFullScreen>
          </iframe>
          <div className='frame-overlay'></div>

        </div>

        <div className='txt-desc' data-aos='zoom-in'>

          <p>I am a fresh graduate of Bachelor of Science in Information Technology at Quezon City University. And an individual who discovers happiness in front-end web development, where converting imaginative visions into interactive digital experiences becomes a thrilling journey of continuous learning and growth.</p>

          <ButtonScroll to={'contact-container'} data={'Contact Me'} />

        </div>

      </div>

      <div className='about-footer'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L80,266.7C160,277,320,299,480,261.3C640,224,800,128,960,101.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>

    </div >

  )

}

export default About
