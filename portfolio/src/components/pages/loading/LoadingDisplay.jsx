import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import NavBar from '../../navBar/NavBar';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skill/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../Footer/Footer';

//For Displaying Loading Component
const LoadingDisplay = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : <>
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </>}
        </>
    )
}

export default LoadingDisplay
