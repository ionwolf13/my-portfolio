import React from 'react';
import blogLearn from '../css/learntolearn.png';
import blogMVC from '../css/mvc.png';
import blogMany from '../css/manytomany.png';
import blogMeme from '../css/memescoding.png';
import blogSync from '../css/syncwithjs.png';
import blogThree from '../css/threepillars.png';
import blogYarn from '../css/yarnvsnpm.png';
import blogComp from '../css/componentsinreact.png';

const BlogsComponent = () => {

    return(
        <div className='blog-component'>
            <h1 id='blog-header'> Checkout My Blogs! </h1>
            <div className='blogs' id='blog-1'>
                <h2 id='blog-1-title'> Learn to Learn </h2>
                <a href='https://israel-garcia1b.medium.com/learn-to-learn-86639f9e04b3'>
                    <img src={blogLearn} alt='blog learn to learn' height='100'/>
                </a>
                <p>
                    <strong>#Learning #Self-Development #Growth </strong>
                    <br/> 
                    Tips and tricks for improving one's self that I acquired from reading 
                    the book "Limitless" by Jim Kwik. Highly recommend this book!
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-2'>
                <h2 id='blog-2-title'> Flowing Through MVC </h2>
                <a href='https://israel-garcia1b.medium.com/flowing-through-mvc-5bbb1c4234d8'>
                    <img src={blogMVC} alt='blog flowing through MVC' height='100' />
                </a>
                <p>
                    <strong>#MVC #RubyOnRails #Controller #Routes</strong>
                    <br/> 
                    A guide to show how the MVC functions. I have a diagram showing it's flow
                    through an application (Ruby Language). Shows what happens after a users
                    sends a request and the app recieves it.
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-3'>
                <h2 id='blog-3-title'>Multiple has Many to Many Ruby Guide</h2>
                <a href='https://israel-garcia1b.medium.com/multiple-has-many-to-many-ruby-guide-4bdfb0aa881d'>
                    <img src={blogMany} alt='blog many to many' height='100'/>
                </a>
                <p>
                    <strong>#Ruby #Associations #ManyToMany</strong>
                    <br/> 
                    Associations were my biggest struggle. This is how I was able to break it
                    down and understand it better. I simplified it to the best of my ability.
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-4'>
                <h2 id='blog-4-title'>Sync With JS </h2>
                <a href='https://israel-garcia1b.medium.com/sync-with-js-c24bebc55f88'>
                    <img src={blogSync} alt='blog sync with js' height='100'/>
                </a>
                <p>
                    <strong>#JavaScript #AJAX #CallBackQueue #Asynchronous</strong>
                    <br/> 
                    The reason why Javascript is so popular for Front End Development. 
                    Here I have a diagram and metaphor showing how it functions.
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-5'>
                <h2 id='blog-5-title'> Three Pillars of Web Development </h2>
                <a href='https://israel-garcia1b.medium.com/three-pillars-of-web-development-191dad27efe2'>
                    <img src={blogThree} alt='blog three pillars' height='100' />
                </a>
                <p>
                    <strong>#WebDevelopment #DOM #Events #Server #HTTP</strong>
                    <br/> 
                    These are the basic requirements for creating a Web application.
                    It comes down to 3 basic principles: DOM, Events and Server/HTTP requests and interaction.
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-6'>
                <h2 id='blog-6-title'> Yarn VS NPM </h2>
                <a href='https://israel-garcia1b.medium.com/yarn-vs-npm-4957401c37fc'>
                    <img src={blogYarn} alt='blog yarn vs npm' height='100' />
                </a>
                <p>
                    <strong>#NodePackageManager #Yarn #PNPM</strong>
                    <br/> 
                    I finally learned the difference between Yarn and NPM. Here I break down the 
                    pros and cons of each of them, including a new Package Manager, PNPM, that could 
                    be a replacement of both Yarn and NPM.
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-7'>
                <h2 id='blog-7-title'> Components in React </h2>
                <a href='https://israel-garcia1b.medium.com/components-in-react-43e5564ffbb2'>
                    <img src={blogComp} alt='blog components in react' height='100' />
                </a>
                <p>
                    <strong>#JavaScript #React #Components #FunctionalComponents</strong>
                    <br/> 
                    Brief description of Functional and Classical Components. Here are some differences and a 
                    quick tip on how to use Functional components in your entire app!
                
                </p>
            </div>
            <br/>
            <div className='blogs' id='blog-8'>
                <h2 id='blog-8-title'> Memes about Coding</h2>
                <a href='https://israel-garcia1b.medium.com/memes-about-coding-c442fb5490'>
                    <img src={blogMeme} alt='blog memes' height='100' />
                </a>
                <p>
                    <strong>#CodeMeme #Meme</strong>
                    <br/> 
                    My favorite coding memes of all time! Have a laugh!
                
                </p>
            </div>
        </div>
    )
}

export default BlogsComponent;