import React from 'react';
import bioIcon from '../css/bioIcon.jpg';
import homeIcon from '../css/homeIcon.png';
import projectIcon from '../css/projectIcon.png';
import resumeIcon from '../css/resumeIcon.png';

const NavComponent = ({info, setInfo}) => {

    const changeNav = (iconName) => {
        setInfo({currentLink: iconName})
        console.log(iconName)
        console.log(info)
    }



    return(
        <div className='nav-component'>
            <div className='nav-component' id='sec-1'>
                <div className='nav-component' id='nav-1' onClick={() => changeNav("Home")}>
                    <img src={homeIcon} alt="home icon" height='100'/>
                </div>
                <div className='nav-component' id='nav-2' onClick={() => changeNav("Bio")} >
                    <img src={bioIcon} alt="bio icon" height='100'/>
                </div>
                <div className='nav-component' id='nav-3' onClick={() => changeNav("Resume")} >
                    <img src={resumeIcon} alt="resume icon" height='100'/>
                </div>
                <div className='nav-component' id='nav-4' onClick={() => changeNav("Projects")} >
                    <img src={projectIcon} alt="project icon" height='100'/>
                </div>
            </div>
        </div>
    )
}

export default NavComponent;