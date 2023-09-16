import React, { useEffect } from 'react';
import AOS from 'aos';
import ProgressBarContainer from './ProgressBar'
import Title from '../../title/Title'

//Skills Layout Component
const Skills = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (

    <div className='skills-container' id='skills'>

      <div className='skills-overlay'>

        <Title title={'SKILLS'} />

        <div className='progress-bar-container' data-aos='zoom-in'>
          <ProgressBarContainer />
        </div>

      </div>

    </div>

  )

}

export default Skills
