import React from 'react';
import contactIcon from '../css/contactIcon.png';

const HomeComponent = () => {

    return(
        <div className='home-component'>
            <h1 className='home-component' id='home-title'> Home </h1>
            <h2>Connect with Me!</h2>
            <img src={contactIcon} alt="contact icon" height='100'/>
                <p id='media'>
                    <br/>
                    <span>
                    LinkedIn
                    </span>
                    <br/>
                    <span>
                    Github
                    </span>
                    <br/>
                    <span>
                    Slack
                    </span>
                    <br/>
                    <span>
                    Gmail
                    </span>
                </p>
        </div>
    )
}

export default HomeComponent;