import React from 'react';
import {useState} from 'react';
import HomeComponent from './HomeComponent.js';
import NavComponent from './NavComponent.js';
import BioComponent from './BioComponent.js';
import ResumeComponent from './ResumeComponent.js';
import ProjectsComponent from './ProjectsComponent.js';


const MainContainer = () => {

    const [portfolioInfo, setPortfolioInfo] = useState({currentLink: 'home'});
    

    return(
        <div className='mainContainer'>
            <h1 className='mainContainer-FullName'> Jesus Israel Garcia </h1>
            <NavComponent portfolioInfo={portfolioInfo} setPortfolioInfo={setPortfolioInfo}/>
            <HomeComponent/>
            <BioComponent/>
            <ResumeComponent/>
            <ProjectsComponent/>
            
        </div>
    )
}

export default MainContainer;