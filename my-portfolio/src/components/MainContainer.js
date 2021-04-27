import React from 'react';
import {useState,useEffect} from 'react';

import NavComponent from './NavComponent.js';

const MainContainer = () => {

    const [portfolioInfo, setPortfolioInfo] = useState({currentLink: null});


    return(
        <div className='mainContainer'>
            <h1 className='mainContainer-FullName'> Jesus Israel Garcia </h1>
            <NavComponent portfolioInfo={portfolioInfo} setPortfolioInfo={setPortfolioInfo}/>
        </div>
    )
}

export default MainContainer;