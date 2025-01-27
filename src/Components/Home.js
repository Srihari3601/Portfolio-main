import React from 'react';
import "../Styles/Home.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import logo from '../Images/logo.svg';
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
                                .typeString('<strong><span style="color:#fc6671;">Front-End Developer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('<strong><span style="color:#a666fc;">Web developer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('<strong><span style="color:#bcfc66">ReactJS Developer</span></strong>')
                                .pauseFor(1000)
                                .deleteAll()
                                .start();
                            }}
                        />
                    </div>
                <div className='Home__Icons'>
                    <BsGithub className='Home__Icon' onClick={() => { window.location.assign("https://github.com/Srihari3601") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/sriharigcfrontendweb") }} />
                </div>
                <button className='Resume'
                    onClick={() => { window.location.assign("https://drive.google.com/file/d/14z4K1A2mrLkEttwwkx-RwMTbhWvxWsEA/view?usp=sharing") }}>
                    View Resume
                </button>
            </div>
        </div>
    );
}

export default Home;
