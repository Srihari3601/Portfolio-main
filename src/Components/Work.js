import React from 'react';
import "../Styles/Work.css";
import AU from "../Images/Work/AU.png";
import Infy from "../Images/Work/WIT_BIG.png";

function Work() {
    return (
        <div className='Work' id='Work'>
            <div className='Work__Col1'>
                <h1 className='Edu__Title'>Education</h1>
                <h2 className='Edu__Clg'>
                    <img className='Edu__Logo' src={AU} alt='' /> College of Engineering, Guindy, Anna University
                </h2>
                <p>B.E. Electronics & Communication Engineering</p>
                <p className='Year'>AUG 2018 - JULY 2022</p>
                <p>Completed with First Class</p>
            </div>
            <div className='Work__Col2'>
                <h1 className='Work__Title'>Experience</h1>
                
                <div className='Exp__div'>
                    <h2 className='Work__Clg'>
                        <img className='Work__Logo' src={Infy} alt='' /> Wipro
                    </h2>
                    <p className='Work__Role'>Frontend web developer</p>
                    <p className='Year2'>JULY 2022 - Present</p>
                </div>
            </div>
        </div>
    );
}

export default Work;
