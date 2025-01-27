import React from 'react';
import "../Styles/Certification.css";


function Certification() {
    return (
        <div className='Project' id='Certification'>
            <h1 className='Project__Title'>Certifications</h1>
            <div className='Project__Cards__Div'>
                <div className='Project__Card'>
                    <p className='Card__Content'><b>The Complete React Js & Redux Course - Build Modern Web Apps</b></p>
                    <p className='Card__Content'>Certificate by <b>Udemy</b> </p>
                    <p className='Card__Content'>Validated my skills in developing the user interface of an application using ReactJS. This certification evaluated my knowledge of React basics, React DOM, React Routing, and server communication concepts</p>
                </div>
                <div className='Project__Card'>
                    <p className='Card__Content'><b>Azure Fundamentals AZ-900</b></p>
                    <p className='Card__Content'>Certificate by <b>Microsoft</b> </p>
                    <p className='Card__Content'>This certification validates my knowledge of cloud computing, Azure services, and Azure resources</p>
                </div>
            </div>                
        </div>
    );
}

export default Certification;