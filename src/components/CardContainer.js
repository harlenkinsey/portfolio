import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Copyright from './Copyright';

const CardContainer = () => {

    return (
        <div className='background'>
            <div className='row card-container'>
                <div className='col s12 m6 l4'>
                    <ProjectCard title='Github Finder' tags={['JavaScript', 'React', 'Redux', 'Materialize']} description='A full-stack application that uses the GitHub API to search for user profiles.' link='https://githubfinder901237.netlify.app'/>
                </div>
                <div className='col s12 m6 l4'>
                    <ProjectCard title='Star Destroyer' tags={['Android', 'Godot', 'GDScript', 'Python']} description='A small 2D game built with Godot for Android.' link='https://play.google.com/store/apps/details?id=com.lonepixel.studios&hl=en_US'/>
                </div>
                <div className='col s12 m6 l4'>
                    <ProjectCard title='Contact Keeper' tags={['JavaScript', 'HTML', 'CSS', 'React', 'MERN']} description='A full-stack application used to record and manage contacts. (may load slowly)' link='https://serieux-croissant-39457.herokuapp.com/login'/>
                </div>
            </div>
            
            {window.innerWidth > 700 && <Copyright textColor='white-text'/>}

        </div>
    )
}

export default CardContainer
