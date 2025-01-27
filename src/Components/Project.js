import React from 'react';
import "../Styles/Project.css";
import ClickIt from "../Images/Projects/ClickIt_image.png";
import LogoIpsum from "../Images/Projects/Logoipsum_image.png";
import EvDashboard from "../Images/Projects/EvDasboard_image.png";
import { AiFillGithub } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { Tilt } from 'react-tilt'


function Project() {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            15,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div className='Project' id='Project'>
            <h1 className='Project__Title'>Personal Projects</h1>
            <div className='Project__Content'>
                <Tilt className="Tilt" options={defaultOptions}>
                    <div className='Project1'>
                        <img className='Project__Img' src={ClickIt} alt='CLickIt website' />
                        <span className='blue-overlay'></span>
                        <div className='Project__Info'>
                            <h2 className='Project__Info__Title'>ClickIt website</h2>
                            <p className='Project__Caption'>Complete wesite for an digital marketing company</p>
                            <div className='Project__Techs'>
                                <div className='Techs'>HTML</div>
                                <div className='Techs'>CSS</div>
                                <div className='Techs'>Tailwind CSS</div>
                                <div className='Techs'>React JS</div>
                                <div className='Techs'>REACT-ICONS</div>
                            </div>
                            <div className='Project__Buttons'>
                                <button className='Project__Btn'
                                    onClick={() => { window.location.assign("https://srihari3601.github.io/clickit-landing-page") }}>
                                    <FaArrowRight className='git' /> Visit
                                </button>
                                <button className='Project__Btn'
                                    onClick={() => { window.location.assign("https://github.com/Srihari3601/clickit-landing-page") }}>
                                    <AiFillGithub className='git' /> GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </Tilt>
                <Tilt className="Tilt" options={defaultOptions}>
                <div className='Project1'>
                    <img className='Project__Img' src={LogoIpsum} alt='LogoIpsum' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Logo Ipsum dashboard</h2>
                        <p className='Project__Caption'>A fully Responsive sample dashboard</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>HTML5</div>
                            <div className='Techs'>CSS3</div>
                            <div className='Techs'>JavaScript</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://logoipsum-page.netlify.app/") }}>
                                <FaArrowRight className='git' /> Visit
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Srihari3601/Logoipsum-page") }}>
                                <AiFillGithub className='git' /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
                </Tilt>
                <Tilt className="Tilt" options={defaultOptions}>
                <div className='Project1'>
                    <img className='Project__Img' src={EvDashboard} alt='Ev Dashboard' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Electric vehicles dashboard</h2>
                        <p className='Project__Caption'>Intuitive dashboard using React</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>ReactJS</div>
                            <div className='Techs'>Pandas</div>
                            <div className='Techs'>ChartJS</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://srihari3601.github.io/my-app") }}>
                                <FaArrowRight className='git' /> Visit
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Srihari3601/my-app") }}>
                                <AiFillGithub className='git' /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
                </Tilt>
                
            </div>
        </div>
    );
}

export default Project;