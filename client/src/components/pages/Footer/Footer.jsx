import React from 'react'
import Logo from '../../logo/Logo'
import List from '../../Icon/List'

//Footer Layout Component
const Footer = () => {
    return (

        <footer>
            <div className="footer-container">
                <Logo />
                <div className="icon-list-container">
                    <List />
                    <p>Copyright &copy; 2023 Ariel Calipay</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer
