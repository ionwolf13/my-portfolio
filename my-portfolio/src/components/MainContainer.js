import React from 'react';
import {useState} from 'react';
import HomeComponent from './HomeComponent.js';
import NavComponent from './NavComponent.js';
import BioComponent from './BioComponent.js';
import ResumeComponent from './ResumeComponent.js';
import ProjectsComponent from './ProjectsComponent.js';
import personalLogo from '../css/personallogoblack.png'

const MainContainer = () => {

    const [info, setInfo] = useState({currentLink: 'Home'});

    console.log("this is the new one", info)
    return(
        <div className='main-container'>
            <div className='main-container' id='main-heading'>
                <div>
                    <h1 className='main-container-full-name'> Jesus Israel Garcia </h1>
                </div>
                <div>
                    <img src={personalLogo} alt='my personal logo' height='200'/>
                </div>
                <NavComponent info={info} setInfo={setInfo} />
            </div>
            <div className='main-container' id='ext-comp'>
                {(info.currentLink === 'Home')? <HomeComponent /> 
                : 
                [(info.currentLink === 'Bio')? <BioComponent />
                :
                [(info.currentLink === 'Resume')? <ResumeComponent /> 
                :
                <ProjectsComponent />]]}
            </div>
        </div>
    )
}

export default MainContainer;