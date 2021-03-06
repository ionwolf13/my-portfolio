import React from 'react';
import contactIcon from '../css/contactIcon.png';

const HomeComponent = () => {

    return(
        <div className='home-component'>
            <h1 id='home-title'>Let's Connect!</h1>
            <img src={contactIcon} alt="contact icon" height='100' id='contact-icon'/>
                <a href='https://www.linkedin.com/in/jesus-israel-garcia/' > 
                    <img src='https://www.fpsa.org/wp-content/uploads/linkedin-logo-copy.png' alt='LinkedIn Logo' height='50' id='contact-1' />
                </a>
                <a href='https://github.com/ionwolf13' > 
                    <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                </a>
                <a href='https://app.slack.com/client/T02MD9XTF/D01B48MCUR1/user_profile/U01B42HUE82' > 
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png' alt='Slack Logo' height='50' id='contact-3' />
                </a>
                <a href='jeisgar13@gmail.com' > 
                    <img src='https://www.clintonfitch.com/wp-content/uploads/2018/01/Gmail-Icon.png' alt='Gmail Logo' height='50' id='contact-4' />
                </a>
                <a href='https://israel-garcia1b.medium.com/'>
                    <img src='https://www.graphicdesignforum.com/uploads/default/original/2X/0/0e58f26a6dd982e7f04d1286defd4320e6d6153b.jpeg' alt='Medium logo' height='50' id='contact-5'/>
                </a>
        </div>
    )
}

export default HomeComponent;