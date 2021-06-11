import React from 'react';
import {useState} from 'react';
import HomeComponent from './HomeComponent.js';
import NavComponent from './NavComponent.js';
import BioComponent from './BioComponent.js';
import ResumeComponent from './ResumeComponent.js';
import ProjectsComponent from './ProjectsComponent.js';
import personalLogo from '../css/personallogoblack.png';

const MainContainer = () => {

    const [info, setInfo] = useState({currentLink: 'Home'});

    console.log("this is the new one", info)
    return(
        <div className='main-container'>
            <h1 className='main-container-full-name' id='main-name'> Jesus Israel Garcia </h1>
            <img src={personalLogo} alt='my personal logo' height='200'id='main-logo'/>
            <NavComponent info={info} setInfo={setInfo} />
            {(info.currentLink === 'Home')? <HomeComponent /> 
            : 
            [(info.currentLink === 'Bio')? <BioComponent />
            :
            [(info.currentLink === 'Resume')? <ResumeComponent /> 
            :
            <ProjectsComponent />]]}
        </div>
    )
}

export default MainContainer;