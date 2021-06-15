import React from 'react';
import educationIcon from '../css/educationIcon.png';
import experienceIcon from '../css/experienceIcon.png';
import codeIcon from '../css/codeIcon.png';

const ResumeComponent = () => {

    return(
        <div className='resume-component'>
            <h1 className='resume-component' id='resume-title'> Resume </h1>
            <div className='resume-component' id='resume-sec-1'>
                    <h2> Software Developer </h2>
                    <p id='resume-pitch'>
                        Aspiring Computer Engineer learning new frameworks, data structures and architecture. Experienced in Ruby on Rails 
                        and JavaScript programming and a background in Business Operations Management. Strong leadership, team building 
                        and communication skills that help tech companies confidently move towards the future. Passionate about collaborating 
                        on mathematical and analytical concepts to improve company productivity. Musical and artistic background to improve 
                        creativity of applications, designing and troubleshooting.
                    </p>
            </div>
            <div className='resume-component' id='resume-sec-2'>
                    <h2 id='sec-2-title'>Technical Skills</h2>
                    <img src={codeIcon} alt='codeIcon' id='skills-logo' height='100'/>
                    <div align='center' id='sec-2-logo'>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png' alt='HTML' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png' alt='CSS' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png' alt='Bootstrap' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/ruby/ruby.png' alt='Ruby' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png' alt='Ruby on Rails' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' alt='JavaScript' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' alt='Node.js' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' alt='React.js' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png' alt='Redux.js' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png' alt='PostgreSQL' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png' alt='SQL' height='40' width='40'/>
                        <img className='tool-logo' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png' alt='Git' height='40' width='40'/>
                    </div>
                    {/* <p>
                        Ruby, Rails, SQL, JavaScript, React, React-Redux, CSS, Tableau, MatLab, Node.js, MySQL, HTML5, Project 
                        Management Skills, Problem Solving Skills, Bug Fixing
                    </p> */}
            </div>
            <div className='resume-component' id='resume-sec-3'>
                    <h2> Experience </h2>
                    <img src={experienceIcon} alt='experience icon' height='100'/>
                    <p>add UPS image here</p>
                    <p>
                        United Parcel Service Houston, Texas
                        Operations Supervisor July 2015 – October 2020
                        ● Met and exceeded internal production goals and established reports to make data-driven improvements. Helped 
                        export 72k pieces on a daily basis, helping to keep the ETA on track. 
                        ● Managed/trained new and current employees, to help improve safety, work efficiency and attention to detail.
                        Increased management responsibility from 8 to 32 employees over the course of 2 years.
                        ● Trained new supervisors for specific areas of operations in the warehouse.Introduced and reinforced knowledge on 
                        how to manage employees, knowledge of machinery and necessary information to complete tasks. Gave 
                        expectations of goals to be met.
                    </p>
            </div>
            <div className='resume-component' id='resume-sec-4'>
                    <h2> Education </h2>
                    <img src={educationIcon} alt='education icon' height='100'/>
                    <p>add Flatiron Image here</p>
                    <p>
                        Flatiron School Coding Bootcamp Houston, Texas
                        Software Engineering Program
                        Full Stack Web Development, Ruby on Rails and JavaScript programming November 2020 - March 2021
                        ● Focused on Back-end using Ruby on Rails, SQLite, Postgres, and Bcrypt 
                        ● Front-end Web Development using Javascript, React.js, Hooks, React Routes, Axios, Material UI
                        </p>
                        <p>add University of Houston Downtown Image here</p>
                        <p>
                        University of Houston - Downtown Houston, Texas
                        Bachelor’s Degree in Mathematics, Minor in Computer Science July/ 2019
                        ● Selected for Leadership Academy Program
                        ● Senior Research Project - Focused on Kelvin Waves in El Niño - Southern Oscillations
                    </p>
            </div>
        </div>
    )
}

export default ResumeComponent;