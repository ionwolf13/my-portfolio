import React from 'react'; 
import vanguard from '../css/vanguardLogo.png';

const ProjectsComponent = () => {

    return(
        <div className='projects-component'>
            <h1 id='project-title'> Projects </h1>
            <div className='project-component' id='project-1'>
                    <h2 className='project-titles'>Upgrade</h2>
                    <img className='project-images' src={vanguard} alt='project-logo' height='100'/>
                    <a className='project-gitHub-logo' href='https://github.com/ionwolf13/my-portfolio' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href='https://github.com/ionwolf13/my-portfolio'>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='45' />
                    </a>
                    <p className='project-description'>
                        <strong>Currently Under Construction!</strong><br/> This app will help users create a healthier and motivating lifestyle.
                        It will teach them that anything is possible no matter how hard and that age doesn't matter.
                    </p>
                    <p className='project-tools'> <strong>PostgreSQL, Ruby, JWT, JavaScript, React, Axios, Material-UI, Chart.js </strong></p>
            </div>
            <div className='project-component' id='project-2'>
                    <h2 className='project-titles'>Vanguard Academy</h2>
                    <img className='project-images' src={vanguard} alt='project-logo' height='100'/>
                    <a className='project-gitHub-logo'href='https://github.com/ionwolf13/my-portfolio' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href='https://github.com/ionwolf13/my-portfolio'>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='45' />
                    </a>
                    <p className='project-description'>
                            A management system built to help educators keep track of their students and grades. A user can 
                            either be a teacher or a student. Both can create an account on this web app, update their profiles 
                            and passwords. Teachers are able to see their current class schedule, see their student roster, create 
                            and delete assignments for students and update grades. They can also give an update on their code of 
                            conduct and leave comments about them. A student can see their grades on current assignments. They can also
                            see which assignments have been completed and when next one's are due. There is also a small quiz that
                            tests their learning to style to help them focus on how they learn best.  
                    </p>
                    <p className='project-tools'> <strong>PostgreSQL, Ruby, JWT, Bcrypt, JavaScript, React.Js, Material-UI, Axios, Chart.Js</strong></p>
            </div>
            <div className='project-component' id='project-3'>
                    <h2 className='project-titles'>Borgtek</h2>
                    <img className='project-images' src={vanguard} alt='project-logo' height='100'/>
                    <a className='project-gitHub-logo'href='https://github.com/ionwolf13/my-portfolio' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href='https://github.com/ionwolf13/my-portfolio'>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='45' />
                    </a>
                    <p className='project-description'>
                        A web application designed to give users a list of computer parts to build a custome PC. A user 
                        can easily create and setup an account. Immediately, they are able to browse through a list of computer parts
                        to build a PC or a list of pre-built computers. There are categories that can fit specific needs, such as school,
                        gaming, work, all in one, etc. There are algorithms working in the back that help the user determine if certain 
                        parts are compatible with each other. Towards the end, a user can see if they have all the parts necessary to build 
                        a PC, if not it will throw an alert. A user can also purchase indivual pieces. After a purchase is completed, recieve 
                        a receipt, one that is printed and another emailed. 
                    </p>
                    <p className='project-tools'> <strong>PostgreSQL, Ruby, Bcrypt, JavaScript, React.Js </strong></p>
            </div>
            <div className='project-component' id='project-4'>
                    <h2 className='project-titles'>BorgLancer</h2>
                    <img className='project-images' src={vanguard} alt='project-logo' height='100'/>
                    <a className='project-gitHub-logo'href='https://github.com/ManBytesDog/freelance-jobs-app' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href='https://github.com/ionwolf13/my-portfolio'>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='45' />
                    </a>
                    <p className='project-description'> 
                        An application created for freelance jobs. A user can either sign up to find jobs or to hire someone 
                        to do a job. A user can create a password and username, with quick access to the personel in our database.
                        There are many different categories that you can search for and if you decide to pick someone for the job, 
                        you can read reviews made for them to make sure they are the right fit. People hiring freelancers can give 
                        reviews based off how they did the job. Freelancers can give reviews about the people who hired them, to show 
                        how they were treated during the job. Sign up! It's free to use! 
                    </p>
                    <p className='project-tools'> <strong>SQLite, Ruby, Bcrypt, Ruby on Rails </strong></p>
            </div>
            <div className='project-component' id='project-5'>
                    <h2 className='project-titles'>Video Game Review</h2>
                    <img className='project-images' src={vanguard} alt='project-logo' height='100'/>
                    <a className='project-gitHub-logo'href='https://github.com/ionwolf13/my-portfolio' > 
                        <img src='http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Github-icon.png' alt='Github Logo' height='50' id='contact-2' />
                    </a>
                    <a className='project-youTube-link' href='https://github.com/ionwolf13/my-portfolio'>
                        <img src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png' alt='youtube logo' height='45' />
                    </a>
                    <p className='project-description'> 
                        Simple CLI application for reviewing video games. The app has a database of many video game titles
                        that a user could choose from. You can create an account and setup a password to keep track of 
                        the video games you own and have given reviews to. You can update any reviews and add/remove new games
                        to your list.
                    </p>
                    <p className='project-tools'> <strong>SQLite, Ruby, TTY-prompt </strong></p>
            </div>
        </div>
    )
}

export default ProjectsComponent;