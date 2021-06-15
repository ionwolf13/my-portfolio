import React from 'react'; 

const ProjectsComponent = () => {

    return(
        <div className='projects-component'>
            <h1 className='projects-component' id='project-title'> Projects </h1>
            <div className='projects-component' id='project-1'>
                    <h2>Upgrade</h2>
                    <p>description</p>
                    <p>Ruby, JavaScript, React, PostgreSQL</p>
            </div>
            <div className='projects-component' id='project-2'>
                    <h2>Vanguard Academy</h2>
                    <p>Ruby, JavaScript, React, PostgreSQL</p>
                    <p>tools</p>
            </div>
            <div className='projects-component' id='project-3'>
                    <h2>Borgtek</h2>
                    <p>description</p>
                    <p>Ruby, JavaScript, React, PostgreSQL</p>
            </div>
            <div className='projects-component' id='project-4'>
                    <h2>Apartments App</h2>
                    <p>Ruby, Ruby on Rails, SQLite</p>
                    <p>tools</p>
            </div>
            <div className='projects-component' id='project-5'>
                    <h2>Video Game Review</h2>
                    <p>description</p>
                    <p>Ruby and SQLite</p>
                    <p>is this gonna show up?</p>
            </div>
        </div>
    )
}

export default ProjectsComponent;