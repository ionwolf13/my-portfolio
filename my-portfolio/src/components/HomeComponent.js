import React from 'react';
import contactIcon from '../css/contactIcon.png';

const HomeComponent = () => {

    return(
        <div className='homeComponent'>
            <h1 className='homeComponent' id='home-title'> Home Section </h1>
            <div className='homeComponent' id='home-sec-1'>

            </div>
            <div>
                <h2>Connect with Me!</h2>
            <img src={contactIcon} alt="contact icon" height='100'/>
                <p>this is the home component</p>
            </div>
        </div>
    )
}

export default HomeComponent;