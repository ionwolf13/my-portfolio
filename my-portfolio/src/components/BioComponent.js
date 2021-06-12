import React from 'react';
import portrait from '../css/pic2.png';



const BioComponent = () => {

    return(
        <div className='bio-component'>
            <h1 className='bio-component' id='bio-title'> About Me! </h1>
            <img src={portrait} alt='portrait' id='portrait' height='200' />
            <p id='bio-story'> Went North Houston Early College High School and recieved my associates degree from HCC. Went to the University of Houston Downtown and graduated with a Bachelor’s in Mathematics and minor in Computer Science.</p>
            
            <h2 id='hobbies-title'> Hobbies </h2>
            <div id='hobbies'>
                <span id='hobbie-1'>
                    <img src='https://www.pinclipart.com/picdir/big/523-5231155_transparent-electric-guitars-clipart-electric-guitar-icon-png.png' alt='guitar-icon' height='50'/>
                </span>
                <span id='hobbie-2'>
                    <img src='https://cdn1.iconfinder.com/data/icons/jetflat-devices-vol-4/90/0093_049_piano_keyboard_music_audio_sound-512.png' alt='piano icon' height='50'/>
                </span>
                <span id='hobbie-3'>
                    <img src='https://th.bing.com/th/id/R6594b53ea338b799295a06716daf1025?rik=kuJSPMU8NbWOMw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fblackvariant%2fbutton-ui-system-apps%2f1024%2fChess-icon.png&ehk=aGSH4U54HvEsf8MZrEl8F%2fy5Yhkz0mvJWXsIQBV6Ln4%3d&risl=&pid=ImgRaw' alt='chess-icon' height='55'/>
                </span>
                <span id='hobbie-4'>
                    <img src='https://cdn4.iconfinder.com/data/icons/sports-balls/1024/Football.png' alt='soccer-icon' height='50'/>
                </span>
                <span id='hobbie-5'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Circle-icons-art.svg/1024px-Circle-icons-art.svg.png' alt='art-icon' height='50'/>
                  </span>
                <span id='hobbie-6'>
                    <img src='https://th.bing.com/th/id/Rdb072b9371311b51be6d4f26590a03dc?rik=%2bihqDbhuEI0Q3g&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-activities%2f512%2f52761-video-game-icon.png&ehk=gZ0WQ0FNjzFopIP1L7hagIbeVJy0%2b4gOc8HYiOgRcvA%3d&risl=&pid=ImgRaw' alt='video-game-icon' height='50'/>
                </span>
                <span id='hobbie-7'>
                    <img src='https://image.flaticon.com/icons/png/512/227/227302.png' alt='gym-icon' height='50'/>
                </span>
            </div>
            
        </div>
    )
}

export default BioComponent;