import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListRoute } from '../data/ListData';

const List = () => {

    return (
        //Component for all social media icons
        <div className='link-container'>

            {ListRoute.map((val) => {

                return (
                    <div className='sm-container'>
                        <a href={val.link} target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon className='icon' icon={val.Icon} />
                        </a>
                    </div>
                );

            })}

        </div>

    )
}

export default List
