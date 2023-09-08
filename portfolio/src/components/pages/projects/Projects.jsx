import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faExpand } from '@fortawesome/free-solid-svg-icons';
import { ListProjects } from '../../data/ProjectData';
import Title from '../../title/Title';
import Modal from '../../modal/Modal';

//Projects Layout Component
const Projects = () => {
  const [display, setDisplay] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const cancelDisplay = () => {
    setSelectedItem(null);
    setDisplay(false);
  }

  const viewDisplay = (item) => {
    setSelectedItem(item);
    setDisplay(true);
  }

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (

    <div className='projects-container' id='projects'>

      <Title title={'PROJECTS'} />

      {display &&
        <Modal cancel={cancelDisplay} laptop={selectedItem.laptop} phone={selectedItem.phone} link={selectedItem.link} stack={selectedItem.stack} description={selectedItem.description}/>
      }

      <div className="project-flex-container">

        {ListProjects.map((val, key) => {
          return (
            <div className="card-container" key={key} data-aos='zoom-in'>
              <div className="icon-container">
                <div className="folder-icon">
                  <FontAwesomeIcon className='icon' onClick={() => viewDisplay(val)} icon={faExpand} />
                </div>
                <div className="site-icon">
                  <a href={val.githubLink} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='icon' icon={faGithub} />
                  </a>
                  <a href={val.link} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} />
                  </a>
                </div>
              </div>
              <div className="title-container">
                <p>{val.title}</p>
              </div>
              <div className="description-container">
                <p>{val.description}</p>
              </div>
              <div className="date-container">
                <p>{val.date}</p>
              </div>
            </div>
          );
        })}

      </div>

    </div >
  )
}

export default Projects
