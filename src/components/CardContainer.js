import React from 'react';
import ProjectCard from './ProjectCard';
import PrivacyPolicy from './PrivacyPolicy';

import DonutGif from '../gifs/donut.gif';
import IDKGif from '../gifs/idk.gif';
import WavesGif from '../gifs/waves.gif';

const CardContainer = () => {

    return (
        <div className='background valign-wrapper'>
            <div className='row card-container'>
                <h3 style={{ paddingLeft: 10.5 }}><span className='highlight'>Projects;</span></h3>
                <div className='col s12 m6 l4'>
                    <ProjectCard 
                        title='IT Logger' 
                        description={<p>A full-stack application that utilizes Firebase and Redux to mimic an application that an IT department might use to manage issues.</p>}
                        link='https://prismatic-kitten-3560cf.netlify.app/'
                        gif={WavesGif}
                        credit='https://i.gifer.com/tsu.gif'
                    />
                </div>
                <div className='col s12 m6 l4'>
                    <ProjectCard 
                        title='Star Destroyer' 
                        description={<p>A small 2D game built with GDScript and the Godot Engine for Android.</p>}
                        link='https://play.google.com/store/apps/details?id=org.godotengine.stardestroyer&pli=1'
                        gif={DonutGif}
                        credit='https://i.gifer.com/4l81.gif'
                        privacyPolicy={<PrivacyPolicy/>}  
                    />
                    
                </div>
                <div className='col s12 m6 l4'>
                    <ProjectCard 
                        title='Github Finder' 
                        description={<p>A full-stack application that uses the GitHub API to search for user profiles.</p>} 
                        link='https://githubfinder901237.netlify.app'
                        gif={IDKGif}
                        credit='https://alcrego.tumblr.com/post/684371504421568512/this-little-creature-appeared-while-working-on-an'
                    />
                </div>
            </div>
        </div>
    )
}

export default CardContainer
