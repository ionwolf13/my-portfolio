import React from 'react';
import educationIcon from '../css/educationIcon.png';
import experienceIcon from '../css/experienceIcon.png';
import codeIcon from '../css/codeIcon.png';

const ResumeComponent = () => {

    return(
        <div className='resumeComponent'>
            <h1 className='resumeComponent' id='resume-title'> Resume </h1>
            <div className='resumeComponent' id='resume-sec-2'>
                    <h3> Software Developer </h3>
                    <div className='resumeComponent'>
                        <p>
                        Aspiring Computer Engineer learning new frameworks, data structures and architecture. Experienced in Ruby on Rails 
                        and JavaScript programming and a background in Business Operations Management. Strong leadership, team building 
                        and communication skills that help tech companies confidently move towards the future. Passionate about collaborating 
                        on mathematical and analytical concepts to improve company productivity. Musical and artistic background to improve 
                        creativity of applications, designing and troubleshooting.
                        </p>
                    </div>
            </div>
            <div className='resumeComponent' id='resume-sec-1'>
                    <h3>Technical Skills</h3>
                    <img src={codeIcon} alt='codeIcon' height='150'/>
                    <div>
                        <p>
                        Ruby, Rails, SQL, JavaScript, React, React-Redux, CSS, Tableau, MatLab, Node.js, MySQL, HTML5, Project 
                        Management Skills, Problem Solving Skills, Bug Fixing
                        </p>
                    </div>
            </div>
            <div className='resumeComponent' id='resume-sec-2'>
                    <h3> Experience </h3>
                    <img src={experienceIcon} alt='experience icon' height='150'/>
                    <div>
                    United Parcel Service Houston, Texas
                    Operations Supervisor July 2015 – October 2020
                    ● Met and exceeded internal production goals and established reports to make data-driven improvements. Helped 
                    export 72k pieces on a daily basis, helping to keep the ETA on track. 
                    ● Managed/trained new and current employees, to help improve safety, work efficiency and attention to detail.
                    Increased management responsibility from 8 to 32 employees over the course of 2 years.
                    ● Trained new supervisors for specific areas of operations in the warehouse.Introduced and reinforced knowledge on 
                    how to manage employees, knowledge of machinery and necessary information to complete tasks. Gave 
                    expectations of goals to be met.
                    </div>
            </div>
            <div className='resumeComponent' id='resume-sec-3'>
                    <h3> Education </h3>
                    <img src={educationIcon} alt='education icon' height='150'/>

                    <div>
                    Flatiron School Coding Bootcamp Houston, Texas
                    Software Engineering Program
                    Full Stack Web Development, Ruby on Rails and JavaScript programming November 2020 - March 2021
                    ● Focused on Back-end using Ruby on Rails, SQLite, Postgres, and Bcrypt 
                    ● Front-end Web Development using Javascript, React.js, Hooks, React Routes, Axios, Material UI
                    University of Houston - Downtown Houston, Texas
                    Bachelor’s Degree in Mathematics, Minor in Computer Science July/ 2019
                    ● Selected for Leadership Academy Program
                    ● Senior Research Project - Focused on Kelvin Waves in El Niño - Southern Oscillations
                    </div>
            </div>
        </div>
    )
}

export default ResumeComponent;