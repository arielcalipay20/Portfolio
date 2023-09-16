import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { ListSkillLeft } from '../../data/SkillData';
import { ListSkillRight } from '../../data/SkillData';

//ProgressBar Component
const ProgressBarContainer = () => {

    return (

        <div className='flex-progress-bar-container'>

            <div className='left-progress-bar-container'>

                {ListSkillLeft.map((val, key) => {

                    return (
                        <div className='layout-container' key={key}>

                            <div className='icon-container' >
                                <val.Icon color={val.color} size={'2.5em'} />
                            </div>
                            <div className="status-container">
                                <p>{val.skill}</p>
                                <ProgressBar completed={val.completed} bgColor={"#F8C244"} labelColor='black' baseBgColor='#045474' animateOnRender={true} />
                            </div>

                        </div>
                    );

                })}

            </div>

            <div className='right-progress-bar-container'>

                {ListSkillRight.map((val, key) => {

                    return (
                        <div className='layout-container' key={key}>

                            <div className='icon-container'>
                                <val.Icon color={val.color} size={'2.5em'} />
                            </div>
                            <div className="status-container">
                                <p>{val.skill}</p>
                                <ProgressBar completed={val.completed} bgColor={"#F8C244"} labelColor='black' baseBgColor='#045474' animateOnRender={true} />
                            </div>

                        </div>
                    );

                })}

            </div>

        </div>

    )

}

export default ProgressBarContainer
