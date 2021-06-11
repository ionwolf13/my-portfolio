import React from 'react';
import portrait from '../css/pic2.png';



const BioComponent = () => {

    return(
        <div className='bio-component'>
            <h1 className='bio-component' id='bio-title'> Bio </h1>
            <img src={portrait} alt='portrait' id='portrait' height='200' />
            <p> Went North Houston Early College High School and recieved my associates degree from HCC. Went to the University of Houston Downtown and graduated with a Bachelor’s in Mathematics and minor in Computer Science.</p>
            <p>hobbies</p>
            <p>Guitar, Piano, Chess, Soccer, Drawing, Video Games, Working Out, Running</p>
        </div>
    )
}

export default BioComponent;