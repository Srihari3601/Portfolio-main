import React from 'react';
import "../Styles/About.css";
import HTML5 from "../Images/Logos/HTML5.png";
import CSS3 from "../Images/Logos/css3.png";
import Js from "../Images/Logos/js.png";
import reactjs from "../Images/Logos/reactjs.png";
import Backbone from "../Images/Logos/backbone.svg";
import tailwind from "../Images/Logos/tailwind.svg";
import bootstrap from "../Images/Logos/bootstrap.png";
import jQuery from "../Images/Logos/jQuery.svg"
import { Tilt } from 'react-tilt';

function About() {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.5,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          2000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div className='About' id='About'>
            <div className='About__Col1'>
                <h1 className='About__Title'>About</h1>
                <p>I'm a passionate <b>Front-End Developer</b> skilled at unlocking the full potential of web interfaces. Proficient in <b>ReactJS</b>, <b>JavaScript</b>, and a diverse range of front-end technologies. I excel at transforming concepts into captivating user experiences, and I thrive on collaborative with cross-functional environments where creativity meets technology.</p>
                <p>My enthusiasm for <b>UX/UI Design</b> drives me to continually expand my knowledge, ensuring that I stay at the forefront of design and development trends</p>
            </div>
            <div className='About__Col2'>
                <h1 className='About__Title2'>Technical skills</h1>
                <div className='Logo__Images'>
                    <Tilt className="Tilt" options={defaultOptions}>
                        <div className='L__Div'>
                            <img className='Logo' src={HTML5} alt='html' title='HTML5' />
                            <p>HTML5</p>
                        </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={CSS3} alt='html' title='CSS3' />
                        <p>CSS3</p>
                    </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={Js} alt='' title='JavaScript' />
                        <p>JavaScript</p>
                    </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={reactjs} alt='' title='ReactJS' />
                        <p>ReactJS</p>
                    </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={Backbone} alt='' title='Backbone JS' />
                        <p>Backbone JS</p>
                    </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={bootstrap} alt='' title='Bootstrap' />
                        <p>Bootstrap</p>
                    </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={tailwind} alt='' title='Tailwind CSS' />
                        <p>Tailwind CSS</p>
                    </div>
                    </Tilt>    
                    <Tilt className="Tilt" options={defaultOptions}>
                    <div className='L__Div'>
                        <img className='Logo' src={jQuery} alt='' title='jQuery' />
                        <p>jQuery</p>
                    </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default About;
