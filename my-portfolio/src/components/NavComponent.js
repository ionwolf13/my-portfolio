import React from 'react';

const NavComponent = ({portfolioInfo, setPortfolioInfo}) => {

    const changeNav = (icon) => {
        portfolioInfo = icon
    }



    return(
        <div className='navComponent'>
            <div>
                picture section and stuff 
            </div>
            <div className='navComponent' id='sec-1'>
                <div className='navComponent' id='nav-1' onClick={() => changeNav("Home")}>
                    Home
                </div>
                <div className='navComponent' id='nav-2' onClick={() => changeNav("Bio")} >
                    Bio
                </div>
                <div className='navComponent' id='nav-3' onClick={() => changeNav("Resume")} >
                    Resume
                </div>
                <div className='navComponent' id='nav-4' onClick={() => changeNav("Projects")} >
                    Projects
                </div>
                <div className='navComponent' id='nav-5' onClick={() => changeNav("Contact")} >
                    Contact
                </div>
            </div>
        </div>
    )
}

export default NavComponent;