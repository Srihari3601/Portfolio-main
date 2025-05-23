import React from 'react';
import "../Styles/Home.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import logo from '../Images/Google Search.gif';
import Typewriter from "typewriter-effect";

function Home() {
    
    return (
        <div className='Home' id='Home'>
            <div className='Home__Intro'>
                <img src={logo} className="App-logo" alt="logo" />
                    <div className='Home__Text'>
                        <p className='Home__Greet'>Welcome to my corner which is Codecrafted with Care!!</p>
                        <h1 className='Home__Name'>Hi, I'm Srihari.</h1>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'Home__Role',
                                cursorClassName: 'Typewriter__Cursor'
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString('<strong><span style="color:#66FCF1;">Software Engineer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('<strong><span style="color:#a666fc;">Front-End Developer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('<strong><span style="color:#fc6671;">Web developer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('<strong><span style="color:#bcfc66">ReactJS Developer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </div>
                <div className='Home__Icons animate__animated animate__delay-2s animate__fadeInUp'>
                    <BsGithub className='Home__Icon' onClick={() => { window.location.assign("https://github.com/Srihari3601") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/sriharigcfrontendweb") }} />
                </div>
                <button className='Resume animate__animated animate__delay-3s animate__fadeInUp'
                    onClick={() => { window.location.assign("https://shorturl.at/3X1CD") }}>
                    View Resume
                </button>
            </div>
        </div>
    );
}

export default Home;
