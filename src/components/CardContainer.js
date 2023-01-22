import React from 'react';
import ProjectCard from './ProjectCard';

let width = window.innerWidth;

const CardContainer = () => {

    return (
        <div className='background valign-wrapper'>
            <div className='row card-container'>
                <h3 style={{ paddingLeft: 10.5 }}><span className='highlight'>Projects;</span></h3>
                <div className='col s12 m6 l4'>
                    <ProjectCard title='Github Finder' description='A full-stack application that uses the GitHub API to search for user profiles.' link='https://githubfinder901237.netlify.app'/>
                </div>
                <div className='col s12 m6 l4'>
                    <ProjectCard title='Star Destroyer' description='A small 2D game built with Godot for Android.' link='https://play.google.com/store/apps/details?id=com.lonepixel.studios&hl=en_US'/>
                </div>
            </div>

        </div>
    )
}

export default CardContainer
