import React from 'react'; 

const ProjectsComponent = () => {

    return(
        <div className='projects-component'>
            <h1 id='project-title'> Projects </h1>
            <div className='project-component' id='project-1'>
                    <h2 className='project-titles'>Upgrade</h2>
                    <a className='project-gitHub-logo' href='' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href=''>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='50' />
                    </a>
                    <p className='project-description'>Currently Under Construction</p>
                    <p className='project-tools'>PostgreSQL, Ruby, JWT, JavaScript, React, Axios, Material-UI </p>
            </div>
            <div className='project-component' id='project-2'>
                    <h2 className='project-titles'>Vanguard Academy</h2>
                    <a className='project-gitHub-logo'href='' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href=''>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='50' />
                    </a>
                    <p className='project-description'>description</p>
                    <p className='project-tools'>PostgreSQL, Ruby, JWT, Bcrypt, JavaScript, React.Js, Material-UI, Axios, Chart.Js</p>
            </div>
            <div className='project-component' id='project-3'>
                    <h2 className='project-titles'>Borgtek</h2>
                    <a className='project-gitHub-logo'href='' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href=''>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='50' />
                    </a>
                    <p className='project-description'>description</p>
                    <p className='project-tools'>PostgreSQL, Ruby, Bcrypt, JavaScript, React.Js </p>
            </div>
            <div className='project-component' id='project-4'>
                    <h2 className='project-titles'>Apartments App</h2>
                    <a className='project-gitHub-logo'href='' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href=''>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='50' />
                    </a>
                    <p className='project-description'>description</p>
                    <p className='project-tools'>SQLite, Ruby, Bcrypt, Ruby on Rails</p>
            </div>
            <div className='project-component' id='project-5'>
                    <h2 className='project-titles'>Video Game Review</h2>
                    <a className='project-gitHub-logo'href='' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href=''>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='50' />
                    </a>
                    <p className='project-description'> 
                        Simple CLI application for reviewing video games. The app has a database of many video game titles
                        that a user could choose from. You can create an account and setup a password to keep track of 
                        the video games you own and have given reviews to. You can update any reviews and add/remove new games
                        to your list.
                    </p>
                    <p className='project-tools'>SQLite, Ruby, TTY-prompt</p>
            </div>
        </div>
    )
}

export default ProjectsComponent;