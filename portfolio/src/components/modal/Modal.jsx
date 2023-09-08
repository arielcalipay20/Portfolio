import React, { useEffect } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/ButtonLink';

const Modal = (props) => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        //Component for modal
        <div className="modal">
            <div className="modal-container" data-aos='zoom-in'>
                <div className="cancel-container">
                    <button className="cancel-btn" onClick={props.cancel}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="flex-container">
                    <div className="mockup-container">
                        <div className="laptop-container">
                            <img src={props.laptop} alt='laptop' />
                        </div>
                        <div className="phone-container">
                            <img src={props.phone} alt='laptop' />
                        </div>
                    </div>
                    <div className="stack-container">
                        <h1 className="stack">
                            Tech Stack
                        </h1>
                        <p>{props.stack}</p>
                        <h1 className="description">
                            Description
                        </h1>
                        <p>-{props.description}</p>
                        <h1 className="tools">
                            Tools
                        </h1>
                        <p>-VSCode</p>
                        <p>-Github</p>
                        <p>-Vercel</p>
                    </div>
                </div>

                <Button href={props.link} data={'View Website'} />
            </div>
        </div>
    )
}

export default Modal
