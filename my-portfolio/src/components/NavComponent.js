import React from 'react';
import bioIcon from '../css/bioIcon.jpg';
import homeIcon from '../css/homeIcon.png';
import projectIcon from '../css/projectIcon.png';
import resumeIcon from '../css/resumeIcon.png';
import blogIcon from '../css/blogIcon-2.png';

const NavComponent = ({info, setInfo}) => {

    const changeNav = (iconName) => {
        setInfo({currentLink: iconName})
    }

    return(
        <div className='nav-component' width='400'>
            <img src={homeIcon} alt="home icon" height='100' onClick={() => changeNav("Home")}/>
            <img src={bioIcon} alt="bio icon" height='100' onClick={() => changeNav("Bio")} />
            <img src={resumeIcon} alt="resume icon" height='100' onClick={() => changeNav("Resume")}/>
            <img src={projectIcon} alt="project icon" height='100' onClick={() => changeNav("Projects")}/>
            <img src={blogIcon} alt='blog icon' height='100' onClick={() => changeNav("Blog")} />
        </div>
    )
}

export default NavComponent;